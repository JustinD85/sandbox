import React, { useState } from 'react'
import { Form, Button, FormGroup } from 'reactstrap'

export default ({ title, placeholder, uniqueId, addStateHandler }) => {
    const [formState, setFormState] = useState({ title: '', input: '' });
    const onChangeHandler = e => setFormState({ ...formState, ...{ [e.target.name]: e.target.value } })
    const onSubmitHandler = e => {
        e.preventDefault();
        addStateHandler({ id: uniqueId(), ...formState })
        setFormState({ title: '', input: '' })
    }

    return (
        <Form className="form" onSubmit={onSubmitHandler}>
            <FormGroup>
                <label> Title
            <input
                        placeholder={title || "title"}
                        className="form__title"
                        name="title"
                        value={formState.title}
                        onChange={onChangeHandler}
                    />
                </label>
            </FormGroup>
            <FormGroup>
                <label> Value
            <input
                        placeholder={placeholder || "value to save"}
                        className="form__input"
                        value={formState.input}
                        name="input"
                        onChange={onChangeHandler}
                    />
                </label>
            </FormGroup>
            <Button color="danger" className="form__submit">Submit</Button>
        </Form>
    )
}