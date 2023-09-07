import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheck, FaTriangleExclamation, FaArrowRight } from "react-icons/fa6";

import styles from "./_Footer.module.scss";
const Subscribe = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ defaultValues: { email: "" } });
	const [isSubmitted, setIsSubmitted] = useState(false);
	const onSubmit = () => {
		setIsSubmitted(true);
	};

	return (
		<form className={styles.subscribeForm} onSubmit={handleSubmit(onSubmit)}>
			<input
				onInput={() => setIsSubmitted(false)}
				aria-invalid={errors.email ? "true" : "false"}
				placeholder="Subscribe to our newsletter"
				{...register("email", {
					required: { value: true, message: "Email required to subscribe" },
					pattern: {
						value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
						message: "Please enter a valid email address",
					},
				})}
			/>

			{errors.email?.message && (
				<p className={styles.errorMessage} role="alert">
					<FaTriangleExclamation size={18} />
					{errors.email.message}
				</p>
			)}
			{isSubmitted && (
				<p className={styles.successMessage}>
					<FaCheck size={18} />
					Thank you for subscribing
				</p>
			)}
			<button className={styles.submit}>
				<FaArrowRight size={18} />
			</button>
		</form>
	);
};
export default Subscribe;
