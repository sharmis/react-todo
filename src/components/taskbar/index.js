import React from 'react';

export default class Taskbar extends React.Component{

    render(){
        return (
            <div>
                <input type ="text" ref="task" placeholder="add your tasks here" />
                <button>Add Task</button>
            </div>
        );
    }
}