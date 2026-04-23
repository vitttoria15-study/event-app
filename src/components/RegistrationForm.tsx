import { useState } from "react";


type Props = {
    onRegister: (data: {fullName: string; email: string}) => void;
};

const RegistrationForm = ({ onRegister }: Props) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onRegister({ fullName, email });

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
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;