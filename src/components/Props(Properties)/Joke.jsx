import PropTypes from "prop-types";


export default function Joke(props) {
    return(
        <>
            {props.setup && <p className="font-bold">Setup: {props.setup}</p>}
            <p>Punchline: {props.punchline}</p>
            <hr />
        </>
    );
}

Joke.propTypes = {
    setup: PropTypes.string.isRequired,
    punchline: PropTypes.string.isRequired
}