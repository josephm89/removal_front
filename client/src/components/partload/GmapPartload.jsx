import React from "react";
import ReactDOM from "react-dom";
import TruckFlicker from "../TruckFlicker";
// import * as partloadActions from '../../store/actions/partload_actions'
// import * as commonActions from '../../store/actions/_common_actions'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { MapObject, mapObjectInstances } from "../../models/mapObject";
import { withRouter } from "react-router";

class GmapPartload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 8,
      center: { lng: -3.1883, lat: 55.9533 },
      map: null
    };
  }

  componentDidMount() {
    this.setState({ map: this.createMap() });
  }

  componentDidUpdate() {
    if (!this.state.mapObject.branchesButtonExists) {
      // this.state.mapObject.addBranchButtonToMap()
      this.state.mapObject.createAMapButton(
        this.state.mapObject.handleBranchesClick.bind(this.state.mapObject),
        "TOP_RIGHT",
        "Branches"
      );
      this.state.mapObject.createAMapButton(
        this.state.mapObject.handleFullScreenMapClick.bind(
          this.state.mapObject
        ),
        "TOP_RIGHT",
        "Full Screen"
      );
    }
  }

  createMap() {
    let pathname = this.props.location.pathname;
    pathname = pathname.slice(1);
    if (mapObjectInstances[pathname]) {
      var map = mapObjectInstances[pathname].map;
      var el = document.querySelector(".partload-map-outer");
      var innerEl = document.querySelector(".grid-item-map-partload");
      innerEl.parentNode.removeChild(innerEl);
      el.appendChild(map.getDiv(".grid-item-map-partload"));
      this.setState({ mapObject: mapObjectInstances[pathname] });
      return map;
    }
    let mapOptions = {
      zoom: this.state.zoom,
      center: this.mapCenter(),
      zoomControl: true,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        mapTypeIds: ["roadmap", "terrain"]
      },
      scaleControl: true,
      streetViewControl: true,
      rotateControl: true,
      fullscreenControl: false
    };
    var map = new google.maps.Map(this.refs.mapCanvas, mapOptions);
    var mapObject = new MapObject(map, pathname);

    this.setState({ mapObject: mapObjectInstances[pathname] });
    return map;
  }

  mapCenter() {
    return new google.maps.LatLng(this.state.center.lat, this.state.center.lng);
  }

  render() {
    // note placement of slider markers handled in slider, to prevent re-render
    const { mapObject } = this.state;
    const {
      partload_marker_array,
      current_partload_truckflicker_job,
      best_pick_up_jobs
    } = this.props;

    if (mapObject) {
      mapObject.display_branches();
      // mapObject.displayOrHideBranchList(
      //   this.props.branch_list_displayed_partload
      // );
      if (current_partload_truckflicker_job) {
        mapObjectInstances.partload.drawRouteWithGoogleResponse(
          current_partload_truckflicker_job
        );
      } else {
        mapObject.displayArrayOfJobRoutes(best_pick_up_jobs);
      }
      if (partload_marker_array.length) {
        mapObject.displayMarkersFromStore(
          partload_marker_array,
          mapObject.postcodeMarkers,
          "red",
          mapObject.panToStreetView.bind(mapObject)
        );
      }
    }

    return (
      <div className="partload-map-outer">
        <div className="grid-item-map-partload" ref="mapCanvas" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  partload_marker_array: state.partload.partload_marker_array,
  best_pick_up_jobs: state.partload.best_pick_up_jobs,
  current_partload_truckflicker_job:
    state.common.current_partload_truckflicker_job
});

export default withRouter(connect(mapStateToProps)(GmapPartload));