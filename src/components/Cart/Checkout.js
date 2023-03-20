import { useRef, useState } from "react";

import styles from "./Checkout.module.css";

const isEmpty = value => value.trim() === '';
const isNotLength = value => value.trim().length !== 5;

const Checkout = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postal: true,
    });

    const nameRef = useRef()
    const streetRef = useRef()
    const postalRef = useRef()
    const cityRef = useRef()


  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value
    const enteredStreet = streetRef.current.value
    const enteredPostal = postalRef.current.value
    const enteredCity = cityRef.current.value

    const enteredNameIsValid = !isEmpty(enteredName)
    const enteredSteetIsValid = !isEmpty(enteredStreet)
    const enteredCityIsValid = !isEmpty(enteredCity)
    const enteredPostalIsValid = !isNotLength(enteredPostal)

    setFormInputValidity({
        name: enteredNameIsValid,
        street: enteredSteetIsValid,
        city: enteredCityIsValid,
        postal: enteredPostalIsValid
    })

    const formIsValid = enteredNameIsValid && enteredSteetIsValid && enteredCityIsValid && enteredPostalIsValid

    if (!formIsValid) {

        return ;
    }

    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        city: enteredCity,
        postal: enteredPostal
    })
  };

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={`${styles.control} ${formInputValidity.name ? '' : styles.invalid}`}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameRef} id="name" type="text" />
        {!formInputValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={`${styles.control} ${formInputValidity.street ? '' : styles.invalid}`}>
        <label htmlFor="street">Street</label>
        <input ref={streetRef} id="street" type="text" />
        {!formInputValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div className={`${styles.control} ${formInputValidity.postal ? '' : styles.invalid}`}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalRef} id="postal" type="text" />
        {!formInputValidity.postal && <p>Please enter a valid postal code (5 chars)</p>}
      </div>
      <div className={`${styles.control} ${formInputValidity.city ? '' : styles.invalid}`}>
        <label htmlFor="city">City</label>
        <input ref={cityRef}id="city" type="text" />
        {!formInputValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
