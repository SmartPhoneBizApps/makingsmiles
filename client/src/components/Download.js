import React from "react";
const adultOrtho = () => {
  console.log("London");
};
const Download = () => {


  return (
    <div className="Grid-4">
      <div>
        <a class="waves-effect waves-light btn-small" onClick={adultOrtho}>
          <i class="material-icons left">directions_run</i>Adult Orthodontics
        </a>
        <a class="waves-effect waves-light btn-small">
          <i class="material-icons left">pan_tool</i>Digit Sucking
        </a>
        <a class="waves-effect waves-light btn-small">
          <i class="material-icons right">enhanced_encryption</i>Emergencies
        </a>
        <a class="waves-effect waves-light btn-small">
          <i class="material-icons right">directions_walk</i>First visit to
          Orthodontist
        </a>
      </div>
      <div>
        <a class="waves-effect waves-light btn-small">
          <i class="material-icons right">settings_applications</i>Fixed
          Appliances
        </a>
        <a class="waves-effect waves-light btn-small">
          <i class="material-icons right">local_cafe</i>Food and Drink
        </a>
        <a class="waves-effect waves-light btn-small">
          <i class="material-icons right">fiber_smart_record</i>Functional
          Appliances
        </a>
        <a class="waves-effect waves-light btn-small">
          <i class="material-icons right">bookmark</i>Impacted Cannies
        </a>
      </div>
      <div>
        <a class="waves-effect waves-light btn-small">
          <i class="material-icons right">expand_more</i>Interproximal Reduction
        </a>
        <a class="waves-effect waves-light btn-small">
          <i class="material-icons right">star_border</i>Invisalign
        </a>
        <a class="waves-effect waves-light btn-small">
          <i class="material-icons right">unfold_less</i>Removable Braces
        </a>
        <a class="waves-effect waves-light btn-small">
          <i class="material-icons right">system_update_alt</i>Retainers
        </a>
      </div>
      <div>
        <a class="waves-effect waves-light btn-small">
          <i class="material-icons right">sync_problem</i>Risks with Fixed
          Appliances
        </a>
      </div>
    </div>
  );
};
export default Download;
