# FODS-React
This is the React Native and Node.js component of the Farm Overheating Detection System (FODS) Schulich School of Engineering Capstone Project 2022.
 
Please note: The full repository containing all host application and Arduino code is private and has been excluded as code proprietary to the project sponsor, Aurora Wireless Networks, was used. As such, only the mobile app is included in this public repository for illustrative purposes.

The FODS Capstone team included members:

<p>Shelby Herle – Project Manager</p>
<p>Peter Boonstra – Hardware Lead</p>
<p>Nikhil Naikar – Firmware Lead</p>
<p>Nooreldeen Abdallah – Integration / Testing Lead</p>
<p>Patrick Willmann – Software Lead (author of the React Native app)</p>

Our team, upon identifying that fires started by overheating farming equipment is a significant issue, sought to develop a full Internet of Things (IOT) system that could alert farmers to dangerously high temperatures capable of starting a fire on their equipment. Fully wireless temperature sensors were prototyped, each of which wirelessly sends temperature and location data to a PC host application, which transmits the data to an AWS database, all of which this React Native app displays to the user.  

The app was developed with ease of use, configurability, and simplicity in mind. A Summary Page shows a list of all connected sensors, displaying the last known temperature of each sensor. If a given sensor is selected, a detail view is presented to the user. Here, the user sees detailed temperature, location, and battery information for the sensor, as well as a map view of its location. Finally, warning and critical threshold temperature sliders are available. These allow the user to set custom warning or critical threshold temperatures, each of which will prompt a push notification should the sensor exceed these thresholds.


<p float="left">
 <img src="/Screenshots/Summary-Sample-iPhone13.png" width="300">
 <img src="/Screenshots/Detail-Sample-iPhone13.png" width="300">
</p>

Full project information can be found here: https://engineeringdesignfair.ucalgary.ca/electrical/farm-overheating-detection-system-fods/
