import React, {useState} from "react";
export default function Hook() {
        const [username, setUsername] = useState("");
        const [cobaArray, setCobaArray] = useState(["daffa", "raisah", "septian"]);
        const handleChangeUsername = (e) => {
            setUsername = e.target.value;
            setUsername(e.target.value);
            return console.log(username);
        }   

        const handleClickSubmit = () => {
        setCobaArray(cobaArray.concat("ardian"));
        return console.log("click submit");
        }


}