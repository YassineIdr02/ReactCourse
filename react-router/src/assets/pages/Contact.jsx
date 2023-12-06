
import {Form, redirect, useActionData} from 'react-router-dom'
export default function Contact(){
        const actionData = useActionData()
        if(actionData && actionData.error)
            console.log(actionData.error)
    return(
        
        <>
            <h1>Contact</h1>
            <Form method="post" action='/help/contact'>
                <label id="user" >User </label>
                <input htmlFor="user" name="user" placeholder='USERNAME'/>
                <button type='submit'>Submit</button>
                
            </Form>
        </>
    )
}

export const ContactUser = async ({request}) => {
    const data = await request.formData()

    const info = {
        user: data.get('user')
    }

    console.log(info)
    if(info.user === " ")
        return {error: "please enter a user name"}
    return redirect('/help/contact');
}