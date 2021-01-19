const App = {
    data() {
      return {
        lineOne: null,
        lineTwo: null,
        symbol: '',
      };
    },
    methods: {
      addNumber(number) {
        if (this.lineTwo === null) {
          this.lineTwo = number;
          return;
        }
  
        this.lineTwo = parseInt('' + this.lineTwo + number);
      },
      removeNumber() {
        if (this.lineTwo === !null) {
          this.lineTwo = null;
          return;
        }
        this.lineTwo = parseInt('' + this.lineTwo + number);
      },
      sum() {
        return this.lineOne + this.lineTwo;
      },
      minus() {
        return this.lineOne - this.lineTwo;
      },
      product() {
        return this.lineOne * this.lineTwo;
      },
      divide() {
        return this.lineOne / this.lineTwo;
      },
      calculate() {
        if (
          this.lineOne === null ||
          this.lineTwo === null ||
          this.symbol === ''
        ) {
          return;
        }
  
        switch (this.symbol) {
          case '+':
            this.lineTwo = this.sum();
          case '-':
            this.lineTwo = this.minus();
          case '*':
            this.lineTwo = this.product();
          case '/':
            this.lineTwo = this.divide();
        }
  
        this.lineOne = null;
        this.symbol = '';
      },
      selectSymbol(symbol) {
        this.calculate();
  
        this.lineOne = this.lineTwo;
        this.symbol = symbol;
        this.lineTwo = null;
      },
    },
  };
  
  /**
   * [ ] styling
   * [X] product
   * [X] minus
   * [X] divide
   * [ ] root
   * [ ] power
   * [ ] backspace
   * [ ] clear
   * [ ] history
   ** [ ] make line two input field
   */
  
  Vue.createApp(App).mount('#vue-app');