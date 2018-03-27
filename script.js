var Counter = React.createClass({
	getDefaultProps: function() {
      	console.log('Metoda ta ustawia domyślne wartości propsów (które nie zostały przekazane do komponentu)');
  	},
 
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1,
        });
    },

  	componentWillMount: function() {
    	console.log('Metoda wywoływana raz przed pierwszym uruchomieniem, zmiana stanu w tej fazie nie powoduje przerenderowania komponentu');
  	},
  
    render: function() {
    	return 	React.createElement('div', {className: 'container'},
	    			    React.createElement('div', {className: 'counter'},
	      				  React.createElement('div', {className: 'circle circle1 animated rubberBand'}, this.state.counter),
	      			  ),
	      			  React.createElement('div', {className: 'buttons'},
	      				  React.createElement('button', {className: 'btn btn-primary', onClick: this.increment},  'Add'), 
	      				  React.createElement('button', {className: 'btn btn-primary', onClick: this.decrement}, 'Minus')
	    			    )
      		    )	    
  	},

  	componentDidMount: function() {
    	console.log('Pobieranie danych z serwera np. listy kontaktów');
  	},

  	componentWillReceiveProps: function(nextProps) {
    	console.log('Metoda wywoływana, gdy komponent otrzyma nowe właściwości, które są przekazywane jako argument tej metody i dzięki temu możemy je porównać z wcześniejszymi i wykonać odpowiednie akcje', 'warning');
  	},
  
  	shouldComponentUpdate: function(nextProps, nextState) {
    	console.log('Metoda ta powinna zwrócić true lub false, w zależności od tego, czy chcemy aby komponent mógł się zmienić wraz z otrzymaniem nowych własności. Może być stosowane jako narzędzie optymalizacji');
    	return true;  	
  	},
  	
  	componentWillUpdate: function(nextProps, nextState) {
    	console.log('Działa analogicznie do copmonentWillMount()');
  	},
  
  	componentDidUpdate: function(prevProps, prevState) {
    	console.log('Działa analogicznie do componentDidMount() wywoływana po update’cie komponentu, tu jednak jako argumenty przekazywane są poprzednie wartości props i state');
  	},
  
  	componentWillUnmount: function() {
    	console.log('Unmount - jest to etam kiedy komponent jest usuwany z drzewa DOM. Metody tej można użyć np.do usunięcia Listenerów');
    	React.unmountComponentAtNode(document.getElementById("app"));
  	}
});


var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));
ReactDOM.render(element, document.getElementById('app1'));
ReactDOM.render(element, document.getElementById('app2'));











    
    