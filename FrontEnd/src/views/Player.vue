<template>
  <div id="playerUI">
    <h1> player </h1>
    <div id="player"></div>
    <div id="overlay" class="overlay">
      <div id="overlayButton" onclick="onExpandOverlay_Click()">+</div>
      <div id="overlaySettings" style="display: block">
        <div id="KickOthers">
          <div class="settings-text">Kick all other players</div>
          <label class="btn-overlay">
            <input type="button" id="kick-other-players-button" class="overlay-button btn-flat" value="Kick">
          </label>
        </div>
        <div id="FillWindow">
          <div class="settings-text">Enlarge Display to Fill Window</div>
          <label class="tgl-switch">
            <input type="checkbox" id="enlarge-display-to-fill-window-tgl" class="tgl tgl-flat" checked>
            <div class="tgl-slider"></div>
          </label>
        </div>
        <div id="QualityControlOwnership">
          <div class="settings-text">Quality control ownership</div>
          <label class="tgl-switch">
            <input type="checkbox" id="quality-control-ownership-tgl" class="tgl tgl-flat">
            <div class="tgl-slider"></div>
          </label>
        </div>
        <div id="statsSetting">
          <div class="settings-text">Show Stats</div>
          <label class="tgl-switch">
            <input type="checkbox" id="show-stats-tgl" class="tgl tgl-flat">
            <div class="tgl-slider"></div>
          </label>
          <div id="statsContainer">
            <div id="stats"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
//import EventCard from '../components/EventCard'

export default {
  data () {
    return {
      isLoading: true,
      events: []
    }
  },
  created () {
    axios.get('//localhost:3001/').then(({ data }) => {
      this.events = data.events.events
      this.isLoading = false
    })
  }
}
</script>
