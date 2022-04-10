
import { InputBase, ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import React from "react";

class Todo extends React.Component {

    constructor(props) {
        super(props);
        // state는 리엑트가 관리하는 오브젝트 => 추후에 변경될 수 있는값 => 변경이후 다시 랜더링
        this.state = { item: props.item, readOnly: true };
        this.delete = props.delete;
        this.update = props.update;
    }

    deleteEventHandler = () => {
        this.delete(this.state.item)
    }

    toggleChecked = (e) => {
        const thisItem = this.state.item;
        thisItem.done = !thisItem.done;
        this.setState({item: thisItem});
        this.update(this.state.item);
    }

    offReadOnlyMode = () => {
        console.log("Event!", this.state.readOnly);
        this.setState({readOnly: false}, () => {
            console.log("ReadOnly? ", this.state.readOnly);
        });
    }

    editEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item: thisItem});
    }

    enterKeyEventHandler = (e) => {
        if (e.key === "Enter") {
            console.log("turn on readOnly");
            this.setState({readOnly: true});
            this.update(this.state.item);
        }
    }

    render() {

        const item = this.state.item

        return (
            <ListItem>
                <Checkbox 
                    checked={item.done} disableFocusRipple
                    onChange={this.toggleChecked}
                />
                <ListItemText>
                    <InputBase
                        inputProps={{
                            "aria-label": "naked",
                            readOnly: this.state.readOnly
                        }}
                        onClick={this.offReadOnlyMode}
                        onChange={this.editEventHandler}
                        onKeyPress={this.enterKeyEventHandler}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                    />
                </ListItemText>

                <ListItemSecondaryAction>
                    <IconButton 
                        aria-label="Delete Todo"
                        onClick={this.deleteEventHandler}
                    >
                        <DeleteOutlined />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default Todo;