function Hello() {

    let myName='Rishi';
    let number=169;

    let fullName= () => {
        return 'Rishi Sai Teja';
    }
    return (
        <h3>Hello, this is the future speaking. I am your master {fullName()}</h3>
    )
}

export default Hello;