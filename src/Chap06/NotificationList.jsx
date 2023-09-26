import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        message : "아침시간입니다."
    },
    {
        message : "점심시간입니다."
    },
    {
        message : "저녁시간입니다."
    }
];

let timer;

class NotificationList extends React.Component{
    constructor(props){
        // 생성자에서는 앞으로 사용할 데이터를 state에 넣어서 초기화한다.
        super(props);

        this.state = {
            notifications : [],
        };
    }

    componentDidMount(){
        const {notifications} = this.state;
        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            }else {
                clearInterval(timer);
            }
        }, 1000);
    }

    render(){
        return(
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification message={notification.message} />;
                })}
            </div>
        );
    }
}

export default NotificationList;