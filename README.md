# PokerLauncher
Allows launching of poker games with parameters

## Requisites
* You need to put the "poker" project and all the "ia" projects in the same parent directory as "Poker Launcher"

_Exemple:_

Parent  
---- PokerLauncher  
---- poker  
---- poker-DevTeam  
---- tester  

* You need to make a slight modification in poker project => main.ts

```js
public constructor(gameFactory: GameFactory<any, any>) {
    // Create player tcp server
    net.createServer(this.onClientSocketConnect.bind(this)).listen(GameConfig.GAMESERVER_PORT);
    
    // Create observer tcp server
    net.createServer(this.onObserverSocketConnect.bind(this)).listen(GameConfig.OBSERVER_PORT);
    this.lobby = new Lobby(gameFactory);
	this._observer = new Observer(new Socket());
	
	 //VDHA
	setTimeout( () => {
	const game = this.lobby.startGame(this.lobby.clients, this._observer);
    game.start();

	}, 1000 * 10 );
  }
 ```

## How to use
 `npm install`

 `npm start`
