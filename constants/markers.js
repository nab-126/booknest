import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class Markers extends React.Component{
    render() {
    return (
        <React.Fragment>
        <MapView.Marker
            coordinate={{latitude: -20.286462,
                        longitude: 57.764947}}
            title={"test"}
            description={"description"}
        />
        <MapView.Marker
            coordinate={{latitude: -20.317781,
                        longitude: 57.5091109}}
            title={"Trou aux Cerfs Running Track"}
            description={"Curepipe"}
        />
        <MapView.Marker
            coordinate={{latitude: -20.291216,
                        longitude: 57.498717}}
            title={"Gymkhana Running Track"}
            description={"Vacoas"}
        />
        <MapView.Marker
            coordinate={{latitude: -20.275442,
                        longitude: 57.487669}}
            title={"Sodnac Wellness Park"}
            description={"Quatre-Bornes"}
        />
        <MapView.Marker
            coordinate={{latitude: -20.309890,
                        longitude: 57.511857}}
            title={"Le Cafe Floreal"}
            description={"Floreal"}
        />
        <MapView.Marker
            coordinate={{latitude: -20.012079,
                        longitude: 57.5854028}}
            title={"Super U"}
            description={"Grand-Baie"}
        />
        <MapView.Marker
            coordinate={{latitude: -20.174294,
                        longitude: 57.500335}}
            title={"Montagne Cignaux Running Track"}
            description={"Port-Louis"}
        />
        <MapView.Marker
            coordinate={{latitude: -20.163407,
                        longitude: 57.502062}}
            title={"Jardin Compagnie"}
            description={"Port-Louis"}
        />
        <MapView.Marker
            coordinate={{latitude: -20.0469085,
                        longitude: 57.5270209}}
            title={"Veranda Pointe Aux Biches"}
            description={"Pointe Aux Biches"}
        />
        <MapView.Marker
            coordinate={{latitude: -20.201281,
                        longitude: 57.7805853}}
            title={"Veranda Palmar"}
            description={"Palmar"}
        />
        <MapView.Marker
            coordinate={{latitude: -20.3273636,
                        longitude: 57.3753058}}
            title={"Veranda Tamarind"}
            description={"Tamarind"}
        />
        </React.Fragment>
        )
    }
}