import React from "react";
import Aux from "../../containers/AuxWrapper/AuxWrapper";
import JobList from "./JobList";
import Gmap from "../Gmap";
import Filter from "./Filter";
import TruckDayView from "./TruckDayView";
import TruckFlicker from "../TruckFlicker";
import SliderPlanner from "./SliderPlanner";
import BranchesInfo from "../BranchesInfo";
//
import * as plannerActions from "../../store/actions/planner_actions";
import * as commonActions from "../../store/actions/_common_actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//

class Planner extends React.Component {

  state = {
    
  }

  componentDidMount () {
      console.log(this.props); 
      this.props.actions.common_actions.getAllTripsFromRails();  // #TODO
  } 

  render() {

    return (
      <Aux>
          <div>temp{this.props.all_trips}</div>
          {/* <Gmap />
          <TruckFlicker />
          <SliderPlanner />
          <JobList />
          <Filter />
          <TruckDayView />
          <BranchesInfo /> */}
      </Aux>
    );
  }
}

const mapStateToProps = state => ({
  all_trips: state.common.all_trips,
  zoom_and_center_planner: state.common.zoom_and_center_planner,
  current_planner_truckflicker_job: state.common.current_planner_truckflicker_job
});

const mapDispatchToProps = dispatch => ({
  actions: {
    planner_actions: bindActionCreators(plannerActions, dispatch),
    common_actions: bindActionCreators(commonActions, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
