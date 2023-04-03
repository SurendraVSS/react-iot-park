import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig';
import {
    ref,
    onValue,
    push,
    update,
    remove
} from 'firebase/database';
import "./main.css"
import { useNavigate } from "react-router-dom";

export default function Main() {
    let navigate = useNavigate();

    const [ledData, setLedData] = useState();
    const [userData, setUserData] = useState();
    useEffect(() => {
        //AsyncStorage.clear()
        getData()
        return onValue(ref(db), querySnapShot => {
            let data = querySnapShot.val() || {};
            //AsyncStorage.clear()
            setLedData(data);
            console.log(data);
        });


    }, []);

    async function getData() {
        let users = await localStorage.getItem('user');
        console.log(users);
        setUserData(JSON.parse(users))
    }
  return (
      <div className="container">
        
          <div class="card" style={{ marginBottom: '10px',marginTop:'20px' }}>
              <div>
                  {ledData?.value == 0 ? <>
                      <div>
                          <button className="btn" onClick={() => { navigate('/Payment') }}>Book Parking Solt</button>
                      </div>
                  </> : <>
                      <div>
                          Parking Slot is booked
                      </div>
                  </>}
              </div>
          </div>

          <div class="card" style={{marginBottom:'10px'}}>
              <div>
                {ledData?.value2 == 0 ? <>
                    <div>
                          <button className="btn" onClick={() => { navigate('/Payment') }}>Book Parking Solt</button>
                    </div>
                </> : <>
                          <div>
                              Parking Slot is booked
                          </div>
                </>}
              </div>
          </div>

          <div class="card" style={{ marginBottom: '10px' }}>
              <div>
                  {ledData?.value3 == 0 ? <>
                      <div>
                          <button className="btn" onClick={() => { navigate('/Payment') }}>Book Parking Solt</button>
                      </div>
                  </> : <>
                      <div>
                          Parking Slot is booked
                      </div>
                  </>}
              </div>
          </div>

          <div class="card" style={{ marginBottom: '10px' }}>
              <div>
                  {ledData?.value4 == 0 ? <>
                      <div>
                          <button className="btn" onClick={() => { navigate('/Payment') }}>Book Parking Solt</button>
                      </div>
                  </> : <>
                      <div>
                          Parking Slot is booked
                      </div>
                  </>}
              </div>
          </div>

          <div class="card" style={{ marginBottom: '10px' }}>
              <div>
                  {ledData?.value5 == 0 ? <>
                      <div>
                          <button className="btn" onClick={() => { navigate('/Payment') }}>Book Parking Solt</button>
                      </div>
                  </> : <>
                      <div>
                          Parking Slot is booked
                      </div>
                  </>}
              </div>
          </div>

          <div class="card" style={{ marginBottom: '10px' }}>
              <div>
                  {ledData?.value6 == 0 ? <>
                      <div>
                          <button className="btn" onClick={() => { navigate('/Payment') }}>Book Parking Solt</button>
                      </div>
                  </> : <>
                      <div>
                          Parking Slot is booked
                      </div>
                  </>}
              </div>
          </div>

    </div>
      
  )
}
