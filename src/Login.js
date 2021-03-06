

import { Button, Container, Grid, Link, TextField, Typography } from "@material-ui/core";
import React from "react";
import { signin } from "./ApiService";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

        // submit 버튼 누르면 리다이렉트됨(왜인지는 모름)
        // https://stackoverflow.com/questions/35105132/how-to-submit-a-html-form-without-redirecting#:~:text=Stop%20the%20default%20behaviour%20of,event%20in%20your%20executeSearch%20function.
        event.preventDefault();
        const data = new FormData(event.target);
        const email = data.get("email");
        const password = data.get("password");
        // 이후에 로그인 성공하면 라우팅 필요 + 에러처리
        signin({ email: email, password: password });
    }

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
                            로그인
                        </Button>
                    </Grid>
                    <Link href="/signup">
                        계정이 없습니까? 여기서 가입해주세요.
                    </Link>
                </Grid>
            </form>

        </Container>
        );
    }
}

export default Login;