import React from "react";
import "./SelectDropdown.css";

const SelectDropdown = props => (
  <>
    <select onChange={props.onChange}>
      {props.option.map((element, index) => (
        <option key={index} value={element}>
          {element}
        </option>
      ))}
    </select>
  </>
);

export default SelectDropdown;

const Hamburger = props => (
  <button className={"hamburger"}>
    {props.isOpen ? (
      <Icon type={["fa", "cross"]} />
    ) : (
      <Icon type={["fa", "hambuger"]} />
    )}
  </button>
);

class Counter {
  constructor() {
    super();

    this.state = {
      count: this.props.start
    };
  }

  increment = e => {
    this.setState({
      count: this.state.count + 1
    });
    this.props.onChange(this.state);
  };

  decrement = e => {
    this.setState({
      count: this.state.count - 1
    });
    this.props.onChange(this.state.count);
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

const handleChange = count => {
  console.log(count);
};
<Counter start={0} onChange={handleChange} />;

class Header {
  constructor() {
    super();
    this.state = {
      //...
      hambugerIsVisible: true
      //...
    };
  }

  openMenu = e => {
    e.preventDefault();
    this.setState({
      hambugerIsVisible: !this.state.hambugerIsVisible
    });
  };

  render() {
    return (
      <div>
        <nav>
          <Hambuger
            isOpen={this.state.hambugerIsVisible}
            onChange={this.openMenu}
          />
        </nav>
        <NavMenu isVisible={this.state.hambugerIsVisible}></NavMenu>
      </div>
    );
  }
}
