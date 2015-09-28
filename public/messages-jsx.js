var MessageForm = React.createClass({

	handleSubmit: function(e){
		e.preventDefault();
		$.post(e.target.action, $(e.target).serialize(), function(json) {
			this.props.updateMessage(json);
		}.bind(this), "json");
	},

	render: function() {
		return (
			<form action="/messages" onSubmit={this.handleSubmit}>
				<input type="text" name="name" placeholder="name" />
				<input type="text" name="content" placeholder="content" />
				<button>save</button>
			</form>
		);
	}
});

var MessageList = React.createClass({
	render: function() {
		var messages = this.props.items.map(function(m) {
			return (
				<div>
					<div className="name">{m.name}</div>
					<div className="content">{m.content}</div>
				</div>
			);
		});
		return (
			<div>
				{messages}
			</div>
		);
	}
});

var Board = React.createClass({
	getInitialState() {
		return {
			items: []
		};
	},

	updateMessage: function(json){
		this.setState({items: json});
	},

	componentDidMount: function() {
		$.getJSON("/messages", function(json) {
			this.setState({items: json});
		}.bind(this));
	},

	render: function() {
		return (
			<div>
				<MessageForm updateMessage={this.updateMessage} />
				<MessageList items={this.state.items} />
			</div>
		);
	}
});

React.render(
  <Board />,
  document.getElementById('content')
);