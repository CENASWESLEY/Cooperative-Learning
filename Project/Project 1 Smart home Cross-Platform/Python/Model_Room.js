// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app); // เพิ่มการใช้ Firebase Storage

// ฟังก์ชันสำหรับการสร้างไฟล์ HTML ใหม่
function createRoomHTML(roomName, bg, devices) {
    // สร้างเนื้อหา HTML โดยใช้ template string
    const roomHTML = ```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DashBoard Smart Home</title>

    <!--=============== FAVICON ===============-->
    <link rel="shortcut icon" href="assets/Icons/Logo.png" type="image/x-icon">

    <!--==================== fontawesome ====================-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

    <!--==================== Font ====================-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    
    <!--==================== CSS ====================-->
    <link rel="stylesheet" href="Model_Room.css">
    <link rel="stylesheet" href="Smarthome.css">
    
    <!--==================== Chart ====================-->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    
    <!--==================== Scrollreveal ====================-->
    <script src="https://unpkg.com/scrollreveal"></script>
    
    <!--==================== MQTT ====================-->
    <script src="https://unpkg.com/mqtt/dist/mqtt.min.js"></script>

    <!--==================== DataTables ====================-->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.25/css/jquery.dataTables.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>


</head>
<body>


    <div class="layout">

        <!--==================== header ====================-->

        <section class="header_main">
           <div class="header_iconmenu">

               <div class="header_subiconmenu">

                   <div class="header_logo">

                       <a href="Smarthome.html" id="home">
                           <div class="menu-item menu-itemlogo">
                               <img src="assets/Icons/Logo.png" alt="Home Icon">
                           </div>
                       </a>

                   </div>

                   <div class="vertical-menu">    
                       <a href="Room.html" id="room">
                           <div class="menu-item">
                               <img src="assets/Icons/manage.png" alt="room Icon">
                           </div>
                       </a>
                   </div>


                   <div class="header_user">
                       <a href="User.html" id="user">
                           <div class="menu-item menu-itemuser">
                               <img src="assets/Icons/user.png" alt="Home Icon">
                           </div>
                       </a>
                   </div>

               </div>
           </div>
       </section>

       <!--==================== Title ====================-->
       <section class="section_main-modelcenter">

           <main class="room">

               <div class="bg_room">
                   <div class="setting_room">
                       <img src="assets/Icons/option.png" alt="">
                   </div>

                   <div class="bg_details">
                       <p  id="roomName"></p>
                       <p id="roomDevice"></p>
                   </div>
                   
                   <img id="roomBg" src="" alt="">
                   
               </div>
           
           </main>

           <main class="favourite_main">
            <div class="favourite_main-title">
                <p class="favourite_name">CONTROL</p>
                <P class="favourite_device" id="control_device" >0 DEVICES</P>
            </div>

            

            <div class="favourite_maincard" id="favourite_maincard">
            <!--
                <div class="favourite_card">
                    <div class="favorite_card-top">
                        <p class="favourite_card-Room" >Security</p>
                        <p class="favourite_card-name" >DOOR</p>
                    </div>
                    <div class="favorite_card-center">
                        <img src="assets/Icons/door.png" alt="">
                    </div>
                    <div class="favourite_status">
                        <p class="favourite_status-text">LOCK</p>
                        <div class="favourite_switch">
                            <input type="checkbox" id="switch_door-value" class="switch switch_door ">
                            <label for="switch_door-value" class="switch-label"></label>
                        </div>
                    </div>
                </div>

                <div class="favourite_card">
                    <div class="favorite_card-top">
                        <p class="favourite_card-Room" >Living Room</p>
                        <p class="favourite_card-name">LIGHT</p>
                    </div>
                    <div class="favorite_card-center">
                        <img src="assets/Icons/lamp.png" alt="">
                    </div>
                    <div class="favourite_status">
                        <p class="favourite_status-text">TURN</p>
                        <div class="favourite_switch">
                            <input type="checkbox" id="switch_light-value" class="switch switch_light ">
                            <label for="switch_light-value" class="switch-label"></label>
                        </div>
                    </div>
                </div>

                <div class="favourite_card">
                    <div class="favorite_card-top">
                        <p class="favourite_card-Room">Bed Room</p>
                        <p class="favourite_card-name">POWER</p>
                    </div>
                    <div class="favorite_card-center">
                        <img src="assets/Icons/power.png" alt="">
                    </div>
                    <div class="favourite_status">
                        <p class="favourite_status-text">TURN</p>
                        <div class="favourite_switch">
                            <input type="checkbox" id="switch_power-value" class="switch switch_power">
                            <label for="switch_power-value" class="switch-label"></label>
                        </div>
                    </div>
                </div>

                
                <div class="favourite_card dialog_favourite_card">
                    <div class="favorite_card-top">
                        <p class="favourite_card-Room" >Living Room</p>
                        <p class="favourite_card-name">YEELIGHT LED BULB 1S</p>
                    </div>
                    <div class="favorite_card-center favorite_card-center-yeelight">
                        <img src="assets/images/User/Devices/Yeelight.png" alt="">
                    </div>
                    <div class="favourite_status">
                        <p class="favourite_status-text">TURN</p>
                        <div class="favourite_switch">
                            <input type="checkbox" id="switch_yeelight-value" class="switch switch_yeelight ">
                            <label for="switch_yeelight-value" class="switch-label"></label>
                        </div>
                    </div>
                </div>
                

                <div class="favourite_card dialog_favourite_card">
                    <div class="favorite_card-top">
                        <p class="favourite_card-Room" >Room</p>
                        <p class="favourite_card-name">TEST</p>
                    </div>
                    <div class="favorite_card-center favorite_card-center">
                        <img src="assets/Icons/test.png" alt="">
                    </div>
                    <div class="favourite_status">
                        <p class="favourite_status-text">TURN</p>
                        <div class="favourite_switch">
                            <input type="checkbox" id="switch_test-value" class="switch switch_test ">
                            <label for="switch_test-value" class="switch-label"></label>
                        </div>
                    </div>
                </div>
                -->
            </div>
            

        

        </main>

        <div class="dialog_favourite" id="dialog_favourite">

            <div class="dialog_favourite-content_edit">
                <div class="dialog_favourite-title_edit">
                    <p>Edit Device</p>
                </div>
            </div>


            <div class="dialog_favourite-content">
                    <div class="dialog_favourite-title">
                        <p>My Devices</p>
                        <img class="close-button" id="close-button-favourite" src="assets/Icons/close.png" alt=""> 
                    </div>
                    
                    <div class="favourite_maincard dialog_favourite_maincard " id="dialog_control_maincard">
                        
                    </div>
            </div>

            <div class="dialog_favourite-content_add">
                <div class="dialog_favourite-title_add">
                    <p>Add Device</p>
                </div>

                <div class="favourite_maincard-AddDevice" id="favourite_maincard">

                    <div class="favourite_card favourite_card-door_adddevice">
                        <div class="favorite_card-top">
                            <p class="favourite_card-Room" >Security</p>
                            <p class="favourite_card-name" >DOOR</p>
                        </div>
                        <div class="favorite_card-center">
                            <img src="assets/Icons/door.png" alt="">
                        </div>
                        <div class="favourite_status">
                            <p class="favourite_status-text">LOCK</p>
                            <div class="favourite_switch">
                                <input type="checkbox" id="switch_door-value" class="switch switch_door ">
                                <label for="" class="switch-label"></label>
                            </div>
                        </div>
                    </div>

                    <div class="favourite_card favourite_card-light_adddevice">
                        <div class="favorite_card-top">
                            <p class="favourite_card-Room" >Living Room</p>
                            <p class="favourite_card-name">LIGHT</p>
                        </div>
                        <div class="favorite_card-center">
                            <img src="assets/Icons/lamp.png" alt="">
                        </div>
                        <div class="favourite_status">
                            <p class="favourite_status-text">TURN</p>
                            <div class="favourite_switch">
                                <input type="checkbox" id="switch_light-value" class="switch switch_light ">
                                <label for="" class="switch-label"></label>
                            </div>
                        </div>
                    </div>

                    <div class="favourite_card favourite_card-power_adddevice">
                        <div class="favorite_card-top">
                            <p class="favourite_card-Room">Bed Room</p>
                            <p class="favourite_card-name">POWER</p>
                        </div>
                        <div class="favorite_card-center">
                            <img src="assets/Icons/power.png" alt="">
                        </div>
                        <div class="favourite_status">
                            <p class="favourite_status-text">TURN</p>
                            <div class="favourite_switch">
                                <input type="checkbox" id="switch_power-value" class="switch switch_power">
                                <label for="" class="switch-label"></label>
                            </div>
                        </div>
                    </div>

                    
                    <div class="favourite_card dialog_favourite_card favourite_card-yeelight_adddevice">
                        <div class="favorite_card-top">
                            <p class="favourite_card-Room">Living Room</p>
                            <p class="favourite_card-name">YEELIGHT</p>
                        </div>
                        <div class="favorite_card-center favorite_card-center-yeelight">
                            <img src="assets/images/User/Devices/Yeelight.png" alt="">
                        </div>
                        <div class="favourite_status">
                            <p class="favourite_status-text">TURN</p>
                            <div class="favourite_switch">
                                <input type="checkbox" id="switch_yeelight-value" class="switch switch_yeelight ">
                                <label for="" class="switch-label"></label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        

        <main class="alert_main">
            <div class="alert_main-title">
                <p class="alert_name">ALERT</p>
                <P class="alert_device" id="alert_device">0 DEVICES</P>
            </div>
                <div class="alert_maincard" id="alert_maincard">
                    <!--
                        <div class="alert_card">
                            <div class="alert_card-top">
                                <p class="alert_card-Room">Sensor</p>
                                <p class="alert_card-name">ULTRASONIC</p>
                            </div>

                            <div class="alert_card-center">
                                <div class="alert_progress-circle " id="ultrasonic">
                                    <div class="progress-circle-inner">
                                    <div class="progress-circle-half left"></div>
                                    <div class="progress-circle-half right">
                                        <div class="progress-circle-half inner"></div>
                                    </div>
                                    <div class="progress-circle-center">
                                        <span class="progress-circle-text" id="ultrasonic-value">0%</span>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div class="alert_card-bottom">
                                <p>STATUS</p>
                                <img src="assets/Icons/blackcar.png" alt="">
                            </div>

                        </div>

                    <div class="alert_card">
                        <div class="alert_card-top">
                            <p class="alert_card-Room">Sensor</p>
                            <p class="alert_card-name">WATER LEVEL</p>
                        </div>
                        
                        <div class="alert_card-center">
                            <div class="alert_progress-circle" id="water-level">
                                <div class="progress-circle-inner">
                                  <div class="progress-circle-half left"></div>
                                  <div class="progress-circle-half right">
                                    <div class="progress-circle-half inner"></div>
                                  </div>
                                  <div class="progress-circle-center">
                                    <span class="progress-circle-text" id="water-level-value">0%</span>
                                  </div>
                                </div>
                              </div>
                        </div>

                        <div class="alert_card-bottom">
                            <p>Level</p>
                            <img src="assets/Icons/lowwater.png" alt="">
                        </div>

                    </div>

                <div class="alert_card">
                    <div class="alert_card-top">
                        <p class="alert_card-Room">Sensor</p>
                        <p class="alert_card-name">PUMP</p>
                    </div>

                    <div class="alert_card-center">
                        <div class="alert_progress-circle" id="pump">
                            <div class="progress-circle-inner">
                              <div class="progress-circle-half left"></div>
                              <div class="progress-circle-half right">
                                <div class="progress-circle-half inner"></div>
                              </div>
                              <div class="progress-circle-center">
                                <span class="progress-circle-text" id="pump-value">0%</span>
                              </div>
                            </div>
                          </div>
                    </div>

                    <div class="alert_card-bottom">
                        <p>STATUS</p>
                        <img src="assets/Icons/blackgauge.png" alt="">
                    </div>

                </div>
            -->
                
            </div>
        </main>



        <div class="dialog_alert" id="dialog_alert">

            <div class="dialog_alert-content_edit">
                <div class="dialog_alert-title_edit">
                    <p>Edit Device</p>
                </div>
            </div>


            <div class="dialog_alert-content">
                    <div class="dialog_alert-title">
                        <p>My Devices</p>
                        <img class="close-button" id="close-button-alert" src="assets/Icons/close.png" alt=""> 
                    </div>
                    
                    <div class="alert_maincard dialog_alert_maincard" id="dialog_alert_maincard">
                        
                    </div>
            </div>

            <div class="dialog_alert-content_add">
                <div class="dialog_alert-title_add">
                    <p>Add Device</p>
                </div>

                <div class="alert_maincard-AddDevice" id="alert_maincard">

                        <div class="alert_card alert_card_add alert_card_ultrasonic_adddevice">
                            <div class="alert_card-top">
                                <p class="alert_card-Room">Sensor</p>
                                <p class="alert_card-name">ULTRASONIC</p>
                            </div>

                            <div class="alert_card-center">
                                <div class="alert_progress-circle " id="ultrasonic">
                                    <div class="progress-circle-inner">
                                    <div class="progress-circle-half left"></div>
                                    <div class="progress-circle-half right">
                                        <div class="progress-circle-half inner"></div>
                                    </div>
                                    <div class="progress-circle-center">
                                        <span class="progress-circle-text" id="">0%</span>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div class="alert_card-bottom alert_card-bottom_add">
                                <p>STATUS</p>
                                <img src="assets/Icons/blackcar.png" alt="" >
                            </div>

                        </div>

                    <div class="alert_card alert_card_add alert_card_waterlevel_adddevice">
                        <div class="alert_card-top">
                            <p class="alert_card-Room">Sensor</p>
                            <p class="alert_card-name">WATER LEVEL</p>
                        </div>
                        
                        <div class="alert_card-center">
                            <div class="alert_progress-circle" id="water-level">
                                <div class="progress-circle-inner">
                                <div class="progress-circle-half left"></div>
                                <div class="progress-circle-half right">
                                    <div class="progress-circle-half inner"></div>
                                </div>
                                <div class="progress-circle-center">
                                    <span class="progress-circle-text" id="e">0%</span>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="alert_card-bottom alert_card-bottom_add">
                            <p>Level</p>
                            <img src="assets/Icons/lowwater.png" alt="" >
                        </div>

                    </div>

                <div class="alert_card alert_card_add alert_card_pump_adddevice">
                    <div class="alert_card-top">
                        <p class="alert_card-Room">Sensor</p>
                        <p class="alert_card-name">PUMP</p>
                    </div>

                    <div class="alert_card-center">
                        <div class="alert_progress-circle" id="pump">
                            <div class="progress-circle-inner">
                            <div class="progress-circle-half left"></div>
                            <div class="progress-circle-half right">
                                <div class="progress-circle-half inner"></div>
                            </div>
                            <div class="progress-circle-center">
                                <span class="progress-circle-text" id="">0%</span>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div class="alert_card-bottom alert_card-bottom_add">
                        <p>STATUS</p>
                        <img src="assets/Icons/blackgauge.png" alt="" >
                    </div>

                </div>
        </div>
            </div>

        </div>

</Section>

<section class="external_main">

    <div class="external_title">
        <p class="external_name">EXTERNAL</p>
        <P class="external_device">2 DEVICES</P>
    </div>

    <div class="external_multi_submain">

        <div class="external_submain-home_charger">
            <div class="external_head">
                <div class="external_headtext">
                    <p class="external_card-Room">Home Charger</p>
                    <p class="external_card-name">MEA EV HOME CHARGER</p>
                </div>
                <div class="external_card-img">
                    <img src="assets/images/User/Devices/home_charger.png" class="home_charger" alt="">
                </div>
            </div>
            <div class="external_maincard-clock">
                <div class="external_card-clock">
                    <p>CLOCK TIMER</p>
                    <div class="external_clock-date">
                        <span id="month">July</span>,
                        <span id="day">Thursday</span>
                        <span id="date">21</span>
                        <span id="year">2024</span>
                    </div>
                    <div class="external_clock-timer">
                        <p id="hour">12</p>
                        <p id="dots">:</p>
                        <p id="min">30</p>
                        <div class="external_clock_subtimer">
                            <p id="period">AM</p>
                            <p id="sec">00</p>
                        </div>
                    </div>
                    <div class="external_card-clock-day">
                        <p id="mon">MON</p>
                        <p id="tue">TUE</p>
                        <p id="wed">WED</p>
                        <p id="thu">THU</p>
                        <p id="fri">FRI</p>
                        <p id="sat">SAT</p>
                        <p id="sun">SUN</p>
                    </div>
                    
                    <div class="external_clock-none"></div>
                </div>

                <div class="external_card_session">
                    <p>SESSION TIME</p>
                    <div class="external_energy">
                        <p>Energy : </p>
                        <p id="session_energy-home_charger">0</p>
                        <p>KWH</p>
                    </div>
                    <div class="external_clock-session">
                        <p id="hour-session">00</p>
                        <p id="dots-session">:</p>
                        <p id="min-session">00</p>
                        <p id="dots-session">:</p>
                        <p id="sec-session">00</p>
                    </div>

                    <div class="external_card_transaction">
                        <div class="start_transaction" id="start_transaction" onclick="startTransaction()">
                            <i class="fa-solid fa-play"></i>
                            <div class="start_transaction-text transaction-text">
                                <p>Start</p>
                                <p>transaction</p>
                            </div>
                        </div>
                        <div class="stop_transaction" id="stop_transaction" onclick="stopTransaction()">
                            <i class="fa-solid fa-stop"></i>
                            <div class="stop_transaction-text transaction-text">
                                <p>Stop</p>
                                <p>transaction</p>
                            </div>
                        </div>
                        <span id="start-time"></span>
                        <span id="end-time"></span>
                        


                    </div>
                </div>
            </div>

            <div class="external_maincard-detail-home_charger">
                <div class="external_card-detail-home_charger">
                    <p class="external_card-name-home_charger">VOLTAGE</p>
                    <p class="external_card-value-home_charger" id="volt-home_charger">0.00</p>
                    <p class="external_card-uni-home_charger">V</p>
                </div>
                <div class="external_card-detail-home_charger">
                    <p class="external_card-name-home_charger">CURRENT</p>
                    <p class="external_card-value-home_charger" id="current-home_charger">0.00</p>
                    <p class="external_card-uni-home_charger">A</p>
                </div>
                <div class="external_card-detail-home_charger">
                    <p class="external_card-name-home_charger">POWER</p>
                    <p class="external_card-value-home_charger" id="power-home_charger">0.00</p>
                    <p class="external_card-uni-home_charger">KW</p>
                </div>
                <div class="external_card-detail-home_charger">
                    <p class="external_card-name-home_charger">ENERGY</p>
                    <p class="external_card-value-home_charger" id="energy-home_charger">0.00</p>
                    <p class="external_card-uni-home_charger">KWH</p>
                </div>

            </div>

            

            <div class="chart_multipages" id="chart_multipages">

                <div class="chart-container-home_charger page1 active_page">
                    <canvas class="chart-home_charger" id="home_charger"></canvas>
                </div>

                <div class="history_chart-container-home_charger page2">
                    <table id="history-home_charger" class="history-home_charger">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Charging Duration</th>
                                <th>Energy Consumed (kWh)</th>
                                <th>Cost</th>
                                <th>Charging Status</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>

                <div class="page3"></div>

                <div class="chart_multipages-dot">
                    <div class="dot_page dot_page1 highlight_page"></div>
                    <div class="dot_page dot_page2"></div>
                </div>

            </div>

            
            
        </div>

        <div class="external_submain" >
            <div class="external_head">
                <div class="external_headtext">
                    <p class="external_card-Room">Sensor</p>
                    <p class="external_card-name">METER</p>
                </div>
                <div class="external_card-img">
                    <img src="assets/Icons/meter.png" alt="">
                </div>
            </div>

            <div class="external_maincard-detail">
                <div class="external_card-detail">
                    <p class="external_card-name">VOLTAGE</p>
                    <p class="external_card-value" id="volt">0.00</p>
                    <p class="external_card-unit">V</p>
                </div>
                <div class="external_card-detail">
                    <p class="external_card-name">CURRENT</p>
                    <p class="external_card-value" id="current">0.00</p>
                    <p class="external_card-unit">A</p>
                </div>
                <div class="external_card-detail">
                    <p class="external_card-name">ACTIVE POWER</p>
                    <p class="external_card-value" id="active_power">0.00</p>
                    <p class="external_card-unit">W</p>
                </div>
                <div class="external_card-detail">
                    <p class="external_card-name">REACTIVE POWER</p>
                    <p class="external_card-value" id="reactive_power">0.00</p>
                    <p class="external_card-unit">VAR</p>
                </div>
                <div class="external_card-detail">
                    <p class="external_card-name">POWER FACTOR</p>
                    <p class="external_card-value" id="power_factor">0.00</p>
                    <p class="external_card-unit" style="opacity: 0;">PF</p>
                </div>
                <div class="external_card-detail">
                    <p class="external_card-name">FREQUENCY</p>
                    <p class="external_card-value" id="frequency">0.00</p>
                    <p class="external_card-unit">HZ</p>
                </div>

            </div>
            
            <div class="chart-container-meter">
                <canvas class="chart-meter" id="chart-meter"></canvas>
            </div>

            
        </div>


</div>



</section>


</div>



    <script type="text/javascript" charset="utf8" src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-streaming@2.0.0/dist/chartjs-plugin-streaming.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns"></script>
    <script src="HTTP.js"></script>
    <script src="MQTT.js"></script>
    <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
    <script type="module" src="Model_Dvice_Management.js"></script>    
    <script type="module" src="Smarthome.js"></script>
    <script type="module">
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
        import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
        import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyDlEl-DpdzHbHrrz6CF5VzXPpDnm9FxFCQ",
            authDomain: "smart-home-389e5.firebaseapp.com",
            projectId: "smart-home-389e5",
            storageBucket: "smart-home-389e5.appspot.com",
            messagingSenderId: "614600068675",
            appId: "1:614600068675:web:ab428bcdf99382f4c6cef6",
            measurementId: "G-HRDBXFNBTS"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const auth = getAuth();

        var uid;
        var email;
        onAuthStateChanged(auth, (user) => {
            if (user) {
                uid = user.uid;
                email = user.email;
                console.log("| Current User |");
                console.log("User Email:", email);
                console.log("User UID:", uid);
                // Load user data when the user is signed in
                loadRoomData(email)
            } else {
                console.log("No user is signed in");
            }
        });


        async function loadRoomData(email) {
            const urlParams = new URLSearchParams(window.location.search);
            const roomId = urlParams.get('roomId');

            if (roomId) {
                const roomDoc = await getDoc(doc(db, "Email", email, "rooms", roomId));

                if (roomDoc.exists()) {
                    const roomData = roomDoc.data();
                    console.log("Room data:", roomData);
                    document.getElementById("roomName").textContent = roomData.name;
                    document.getElementById("roomDevice").textContent = \`${roomData.device} Devices\`;
                    document.getElementById("roomBg").src = roomData.bg;
                } else {
                    console.log("No such document!");
                }
            } else {
                console.log("No roomId provided in URL");
            }
        }
    </script>
</body>
</html>

    ```;
    return roomHTML;
}

function uploadRoomHTML(roomName, htmlContent) {
    const storageRef = ref(storage, 'rooms/' + roomName + '.html');
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const uploadTask = uploadBytesResumable(storageRef, blob);

    uploadTask.on('state_changed', 
        (snapshot) => {
            // Progress handling (optional)
        }, 
        (error) => {
            // Handle errors here
            console.error("Error uploading HTML file:", error);
        }, 
        () => {
            // Handle successful uploads on complete
            console.log("HTML file uploaded successfully");
        }
    );
}

// Example usage within the submit function
SubmitAdd.onclick = function () {
    var RoomName = inputNameAdd.value || 'New Room';
    var RoomDevice = inputDeviceAdd.value || '1';
    var newRoomData = {
        name: RoomName,
        bg: newBgAdd || 'assets/images/Living.jpg',
        device: RoomDevice
    };

    const newRoomRef = ref(db, 'rooms/' + RoomName.replace(/\s+/g, '_'));
    set(newRoomRef, newRoomData).then(() => {
        var NewRoom = `
            <div class="room_box" data-id="${RoomName.replace(/\s+/g, '_')}">
                <a href="${RoomName.replace(/\s+/g, '_')}.html">
                    <img class="room_box_bg" src="${newRoomData.bg}" alt="">
                </a>
                <img class="room_box_option" src="assets/Icons/option.png" alt="">
                <div class="room_box_title">
                    <p>${RoomName}</p>
                    <p>${RoomDevice} Devices</p>
                </div>
            </div>
        `;
        roomMainbox.innerHTML += NewRoom;
        Add.style.display = "none";

        // สร้าง HTML สำหรับห้องใหม่
        const roomHTML = createRoomHTML(RoomName, newRoomData.bg, RoomDevice);
        uploadRoomHTML(RoomName.replace(/\s+/g, '_'), roomHTML);

        window.location.reload();
        updateRoomBoxOptions();
    }).catch((error) => {
        console.error("Error adding document: ", error);
    });
};
