declare module 'chat-app' {

    type TUser = {
        uid: string;
        firstName: string;
        middleName?: NullableString;
        lastName: string;
        emailId: string;
        phoneNumber: string;
        timestamp: Date;
    };

    type TMessage = {
        uid: string;
        senderUid: string;
        receiverUid: string;
        content: string;
        timestamp: Date;
    };

    type TChatAppContext = {
        currentUser: NullableString;
        setCurrentUser: React.Dispatch<React.SetStateAction<NullableString>>
    };
}
