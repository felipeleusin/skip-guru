import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Map, { GoogleApiWrapper } from 'google-maps-react'

import { googleMapsApiKey } from '~/utils/gmap'

class LocationSuggestions extends Component {
  state = { suggestions: [] }

  static getDerivedStateFromProps(props) {
    if (!props.search) {
      return { suggestions: [] }
    }
    return null
  }

  componentDidUpdate(prevProps) {
    if (prevProps.search !== this.props.search && this.autocompleteService) {
      if (this.props.search) {
        this.handleSearch()
      }
    }
  }

  handleReady = (mapProps, map) => {
    this.autocompleteService = new google.maps.places.AutocompleteService()
    this.geocoder = new google.maps.Geocoder()
    this.placesService = new google.maps.places.PlacesService(map)
    if (this.props.search) {
      this.handleSearch()
    }
  }

  handleSearch = () => {
    this.autocompleteService.getPlacePredictions(
      {
        input: this.props.search,
        type: 'geocode',
      },
      suggestions => {
        this.setState({ suggestions })
      },
    )
  }

  render() {
    const { suggestions } = this.state

    return (
      <Map google={this.props.google} visible={false} onReady={this.handleReady}>
        {this.props.children({
          items: suggestions,
        })}
      </Map>
    )
  }
}

LocationSuggestions.propTypes = {
  search: PropTypes.string.isRequired,
  google: PropTypes.shape().isRequired,
  children: PropTypes.func.isRequired,
}

export default GoogleApiWrapper({
  apiKey: googleMapsApiKey,
})(LocationSuggestions)
