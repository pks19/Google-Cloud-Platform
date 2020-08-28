const functions = require('firebase-functions');
const Routific = require('routific')

// This is your actual token
const token = 'API_KEY' 

const options = { token: token}
const client = new Routific.Client(options);

// Gets the data for multiple vahicles and customers in the format from Routific VRP documentation
exports.VRP = functions.https.onCall((data, context) => {
    const vrp = new Routific.Vrp()
    const visits = data.visits // address lat lng and id
    const vehicles = data.vehicles // vehicle information
    const options = data.options // extra options for api

    visits.map((visit) => {
        vrp.addVisit(visit.id, visit)
    })
    vehicles.map((vehicle) => {
        vrp.addVehicle(vehicle.id, vehicle)
    })

    vrp.addOption("traffic", options.traffic) // speed (normal,fast)
    vrp.addOption("polylines", options.polyline) // to plot the routes in a map
    vrp.addOption("min_visits_per_vehicle",options.min_visits_per_vehicle) // assign minimum number of trip to each vehicle
    vrp.addOption("balance",options.balance) //balance driving across fleet
    vrp.addOption("min_vehicles",options.min_vehicles) // try to minimize number of vehicle
    vrp.addOption("shortest_distance",options.shortest_distance) // reduce idle time for driver
    vrp.addOption("max_vehicle_overtime",options.max_vehicle_overtime) // time a driver can do over time
    vrp.addOption("max_visit_lateness",options.max_visit_lateness) //time allowed to be late
    // vrp.addOption("visit_balance_coefficient",options.visit_balance_coefficient) //0 for minimum time and 1 for balanced route
    // vrp.addOption("squash_durations",options.squash_durations) // if more than two stops are at same location, the parking time is removed

    return client.route(vrp)
        .then((solution) => solution)
        .catch((error) => error)
})

exports.VRP2 = functions.https.onCall((data, context) => {
    const vrp = new Routific.Vrp()
    const visits = data.visits // address lat lng and id
    const vehicles = data.vehicles // vehicle information
    const options = data.options // extra options for api

    visits.map((visit) => {
        vrp.addVisit(visit.id, visit)
    })
    vehicles.map((vehicle) => {
        vrp.addVehicle(vehicle.id, vehicle)
    })

    vrp.addOption("traffic", options.traffic) // speed (normal,fast)
    vrp.addOption("polylines", options.polyline) // to plot the routes in a map
    // vrp.addOption("min_visits_per_vehicle",options.min_visits_per_vehicle) // assign minimum number of trip to each vehicle
    // vrp.addOption("balance",options.balance) //balance driving across fleet
    vrp.addOption("min_vehicles",options.min_vehicles) // try to minimize number of vehicle
    vrp.addOption("shortest_distance",options.shortest_distance) // reduce idle time for driver
    vrp.addOption("max_vehicle_overtime",options.max_vehicle_overtime) // time a driver can do over time
    vrp.addOption("max_visit_lateness",options.max_visit_lateness) //time allowed to be late
    // vrp.addOption("visit_balance_coefficient",options.visit_balance_coefficient) //0 for minimum time and 1 for balanced route
    // vrp.addOption("squash_durations",options.squash_durations) // if more than two stops are at same location, the parking time is removed

    return client.route(vrp)
        .then((solution) => solution)
        .catch((error) => error)
})

exports.PDP = functions.https.onCall((data, context) => {
    const pdp = new Routific.Pdp();
    const visits = data.visits // address lat lng and id
    const vehicles = data.vehicles // vehicle information
    const options = data.options // extra options for api

    visits.map((visit) => {
        pdp.addVisit(visit.id, visit)
    })
    vehicles.map((vehicle) => {
        pdp.addVehicle(vehicle.id, vehicle)
    })

    pdp.addOption("traffic", options.traffic) // speed (normal,fast)
    pdp.addOption("polylines", options.polyline) // to plot the routes in a map
    pdp.addOption("min_visits_per_vehicle",options.min_visits_per_vehicle) // assign minimum number of trip to each vehicle
    pdp.addOption("balance",options.balance) //balance driving across fleet
    pdp.addOption("min_vehicles",options.min_vehicles) // try to minimize number of vehicle
    pdp.addOption("shortest_distance",options.shortest_distance) // reduce idle time for driver
    pdp.addOption("max_vehicle_overtime",options.max_vehicle_overtime) // time a driver can do over time
    pdp.addOption("max_visit_lateness",options.max_visit_lateness) //time allowed to be late
    // pdp.addOption("visit_balance_coefficient",options.visit_balance_coefficient) //0 for minimum time and 1 for balanced route
    // pdp.addOption("squash_durations",options.squash_durations) // if more than two stops are at same location, the parking time is removed

    return client.route(pdp)
        .then((solution) => solution)
        .catch((error) => error)
})


exports.PDP2 = functions.https.onCall((data, context) => {
    const pdp = new Routific.Pdp();
    const visits = data.visits // address lat lng and id
    const vehicles = data.vehicles // vehicle information
    const options = data.options // extra options for api

    visits.map((visit) => {
        pdp.addVisit(visit.id, visit)
    })
    vehicles.map((vehicle) => {
        pdp.addVehicle(vehicle.id, vehicle)
    })

    pdp.addOption("traffic", options.traffic) // speed (normal,fast)
    pdp.addOption("polylines", options.polyline) // to plot the routes in a map
    // pdp.addOption("min_visits_per_vehicle",options.min_visits_per_vehicle) // assign minimum number of trip to each vehicle
    // pdp.addOption("balance",options.balance) //balance driving across fleet
    pdp.addOption("min_vehicles",options.min_vehicles) // try to minimize number of vehicle
    pdp.addOption("shortest_distance",options.shortest_distance) // reduce idle time for driver
    pdp.addOption("max_vehicle_overtime",options.max_vehicle_overtime) // time a driver can do over time
    pdp.addOption("max_visit_lateness",options.max_visit_lateness) //time allowed to be late
    // pdp.addOption("visit_balance_coefficient",options.visit_balance_coefficient) //0 for minimum time and 1 for balanced route
    // pdp.addOption("squash_durations",options.squash_durations) // if more than two stops are at same location, the parking time is removed

    return client.route(pdp)
        .then((solution) => solution)
        .catch((error) => error)
})