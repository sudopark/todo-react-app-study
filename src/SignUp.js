import React from "react";
import { Grid, Link, Button, Container, TextField, Typography } from "@material-ui/core";
import { signup } from "./ApiService";

class Signup extends React.Component {

    constructor(props) {
        super(props);

    }


    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const email = data.get("email");
        const password = data.get("password");
        const username = data.get("username");

        signup({ email: email, password: password, username: username })
        .then((response) => {
            window.location.href = "/login";
        })
    };


    render() {
        return (
            <Container component="main" maxWidth="xs" style={{marginTop: "8%"}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography component={"h1"} variant="h5">
                        로그인
                    </Typography>
                </Grid>
            </Grid>
            <form noValidate onSubmit={this.handleSubmit}>
                { " "}
                {/* submit 버튼을 클릭하면 handleSubmit 함수가 실행됨 */}
                <Grid Container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="username"
                            label="사용자 이름"
                            name="username"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="이메일 주소"
                            name="email"
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="password"
                            label="패스워드"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            계정 생성
                        </Button>
                    </Grid>
                </Grid>
                <Grid container justify="fixed-end">
                    <Grid item>
                        <Link href="/login" variant="body2">
                            이미 계정이 있습니까? 로그인하세요
                        </Link>
                    </Grid>
                </Grid>
            </form>

        </Container>
        );
    }
}


export default Signup;