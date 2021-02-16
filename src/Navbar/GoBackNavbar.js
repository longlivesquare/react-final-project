import { Navbar, Image } from "react-bootstrap"
import { useHistory } from "react-router-dom";

const GoBackNavbar = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    return (
        <Navbar>
            <Image 
                src={`${process.env.PUBLIC_URL}/arrow-left.svg`}
                alt='Go Back arrow'
                onClick={goBack} 
                style={{cursor:"pointer"}}
            />
        </Navbar>
    )
}

export default GoBackNavbar;