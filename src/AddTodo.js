import { Button, Grid, Paper, TextField } from "@material-ui/core";
import React from "react";


class AddTodo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {item: {title: ""}};   // 사용자 입력을 저장할 오브젝트
        this.add = props.add;
    }

    // input 이벤트를 onInputChange로 받아서 state 업데이트
    onInputChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({items: thisItem});
        console.log(thisItem);
    }

    onButtonClick = () => {
        this.add(this.state.item);  // 현재 상태의 item을 읽어 주입받은 add 함수 호출
        this.setState({item: { title: "" }});   // 이후 상태 초기화
    }

    enterKeyHandler = (e) => {
        if(e.key == 'Enter') {
            this.onButtonClick();
        }
    }

    render() {
        return (
            <Paper style={{margin: 16, padding: 16}}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{paddingRight: 16}}>
                        <TextField 
                            placeholder="Add Todo here" 
                            fullWidth 
                            onChange={this.onInputChange}   // onInputChange를 생성자에 전달
                            value={this.state.item.title}
                            onKeyPress={this.enterKeyHandler}
                        />
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button 
                            fullWidth color="secondary" 
                            variant="outlined"
                            onClick={this.onButtonClick}
                        >
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}


export default AddTodo;