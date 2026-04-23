import { useState } from "react";


type Props = {
    onRegister: (data: {fullName: string; email: string}) => void;
};

const RegistrationForm = ({ onRegister }: Props) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!fullName || !email) {
            setError("Please fill in all fields.");
            setSuccess("");
            return;
        }
        
        setError("");

        onRegister({ fullName, email });

        setSuccess("Registration successful!");
        setEmail("");
        setFullName("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                    type="text" 
                    placeholder="Full name" 
                    value={fullName}
                    onChange={ (e) => setFullName(e.target.value) }
                />
            </div>
            <div>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={ (e) => setEmail(e.target.value) }
                />
            </div>
            <button type="submit" disabled={!fullName || !email}>Register</button>

            {error && <p style={{ color: "red"}}>{error}</p>}
            {success && <p style={{ color: "green"}}>{success}</p>}
        </form>
    );
};

export default RegistrationForm;