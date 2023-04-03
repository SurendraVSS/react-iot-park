import React from 'react'


function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}


export default function Payment() {

    async function showRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const data = await fetch("http://43.207.189.44:3009/razorpay", {
            method: "POST",
        }).then((t) => t.json());

        console.log(data);

        const options = {
            key: "rzp_test_ddWubyGOUv3P5e",
            currency: data.currency,
            amount: data.amount.toString(),
            order_id: data.id,
            name: "Donation",
            description: "Thank you for nothing. Please give us some money",
            handler: function (response) {
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature);

                alert("Transaction successful");
            },
            prefill: {
                name: "Rajat",
                email: "rajat@rajat.com",
                phone_number: "9899999999",
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
  return (
      <div className="App">
          {/* <header className="App-header">
              <p>Razorpay payment portal ezzzz</p>
              <a
                  className="App-link"
                  onClick={showRazorpay}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Pay now
              </a>

              <button onClick={() => showRazorpay()}>Pay now</button>
          </header> */}

          <div>
            <h1 style={{justifyContent: 'center',alignItems: 'center', textAlign:'center',marginTop:'30px'}}>Pay vai the scanner Rs 80/- only per day</h1>
            <div style={{justifyContent: 'center',alignItems: 'center',display: 'flex', marginTop:'20px'}}>
                  <img src={require("./payment.png")} alt="" />
            </div>
           
          </div>
      </div>
  )
}
