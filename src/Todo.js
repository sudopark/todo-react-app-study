
import { InputBase, ListItem, ListItemText, Checkbox } from "@material-ui/core";
import React from "react";

class Todo extends React.Component {

    constructor(props) {
        super(props);
        // state는 리엑트가 관리하는 오브젝트 => 추후에 변경될 수 있는값 => 변경이후 다시 랜더링
        this.state = { item: props.item };
    }

    render() {

        const item = this.state.item

        return (
            <ListItem>
                <Checkbox checked={item.done}/>
                <ListItemText>
                    <InputBase
                        inputProps={{"aria-label": "naked"}}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                    />
                </ListItemText>
            </ListItem>
        );
    }
}

export default Todo;