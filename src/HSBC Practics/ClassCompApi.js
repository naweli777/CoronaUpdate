import React from "react";

class ClassCompApi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          isLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) return <div>Loading...</div>;

    return (
      <>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              Name: {item.name} | Email: {item.email}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default ClassCompApi;
