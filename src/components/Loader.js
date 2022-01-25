import React from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";

const Loader = () => {
    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight - 50}}
                alignItems={"center"}
                justify={"center"}
            >
                    <Grid style={{
                        width:400,
                        background:"lightgray"
                    }} container
                    alignItems={"center"}
                    direction={"column"}
                    >
                        <div className="lds-ellipsis">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;