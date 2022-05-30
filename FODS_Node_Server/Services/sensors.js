const db = require('./db');
const helper = require('../helper')
const config = require('../config');


//Gets the full list of sensors from the database 
//For use in the app's main list view
async function getMultiple(page = 1) {

    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query (
        `SELECT * FROM FODS.FarmOne LIMIT ${offset},${config.listPerPage}`
    );

    const data = helper.emptyOrRows(rows);
    // const meta = {page};

    return {
        data,
    };
};

//Gets a single sensor's associated data given the input ID number
//For use in the detail page view, where only a single sensor's data is needed
async function getSingle(id) {
    const row = await db.query (
        `SELECT * FROM FODS.FarmOne where ID=${id}`
    );

    return {row};
};


//Updates the sensor's Name, WarningTemp, and CriticalTemp in the database associated with a given ID
//Note that all fields must be present for each update
async function update(id, sensor) {

    const result  = await db.query (
    `UPDATE FODS.FarmOne 
    SET EpName="${sensor.EpName}", WarningTemp="${sensor.WarningTemp}", CriticalTemp="${sensor.CriticalTemp}" WHERE ID=${id}` 
    );

    let message = "Error updating sensor";

    if (result.affectedRows) {
        message = "Sensor updated successfully";
    }

    return {message};

};

module.exports = {
    getMultiple,
    getSingle,
    update
}