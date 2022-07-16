import { useState } from 'react';
import emailjs from '@emailjs/browser';

const useSendCounselling = (KEY) => {

    const [loading, setLoading] = useState(false)

    const sendEmail = (service_id , template_id, template_params) => {

        setLoading(true)

        return emailjs.send(service_id, template_id, template_params, KEY)
        .then((res) => {
            setLoading(false)
            return res.status
        },
        (err) => {
            setLoading(false)
            return err.status
        })
    }

    return [
        sendEmail,
        loading,
    ]
}

export default useSendCounselling