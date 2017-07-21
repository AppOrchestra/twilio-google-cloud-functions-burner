var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' // Your Account SID from www.twilio.com/console
var authToken = 'your_auth_token'   // Your Auth Token from www.twilio.com/console
var twilioNumber = '' // Twilio number
var myNumber = '' // Your real phone number

var twilio = require('twilio')
var client = new twilio(accountSid, authToken)


/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.forwardSMS = function forwardSMS(req, res) {

    const From = req.body.From
    if(!From) {
        res.status(400).send('Please provide an number in the "From" query string parameter.')
        return
    }
    const Body = req.body.Body
    if(!Body) {
        res.status(400).send('Please provide an number in the "Body" query string parameter.')
        return
    }

    client.sendMessage({
        body: `Message from: ${From} \n ${Body}`,
        to: myNumber,  // Text this number
        from: twilioNumber // From a valid Twilio number

    }).then(
        error => {
            if(error) {
                res.status(500)
                console.error('Error creating message', error)
            } else {
                res.status(200).send('Message sent.')
            }
        }
    )
}


/**
 * HTTP Cloud Function to send a message when someone tried to call your number
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.forwardCall = function forwardCall(req, res) {

    const From = req.body.From
    if(!From) {
        res.status(400).send('Please provide an number in the "From" query string parameter.')
        return
    }

    client.messages.create({
        body: `You have a call from: ${From}`,
        to: myNumber,  // Text this number
        from: twilioNumber // From a valid Twilio number

    }).then(
        message => {
            res.status(200)
                .contentType('text/xml')
                .send(message.toString())
        },
        error => {
            res.status(500)
            console.error('Error creating message', error)
        }
    )
}