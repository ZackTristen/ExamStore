import React from 'react';
import GameItem from '../game-item/game-item'
import { connect } from 'react-redux';
import withService from '../hoc/withService';
import { gamesLoaded, gamesRequested, hasError } from '../../actions/actions'
// import { bindActionCreators } from 'redux';
import './game-list-item.css'
import Spinner from '../spinner/spinner'
import ErrorIndicator from '../error-indicator/error-indicator';


class GameListItem extends React.Component {


    componentDidMount() {
        const {fetchingGames} = this.props
        fetchingGames()


        // 1. receive data
        // const { serviceGame, gamesLoaded, gamesRequested, hasError } = this.props
        // gamesRequested()
        // console.log(serviceGame.getResource())
        // 2.dispatch action to store
        // serviceGame.getResource()
        //     .then((data) => {
        //         gamesLoaded(data)
        //     }).catch(error => {
        //         hasError(error)
        //     })
    }

    render() {
        const { games, loading, error } = this.props

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator/>
        }
         
        return (
            <div className="game-list">

                {
                    games.map((item) => {
                        return (
                            <GameItem key={item.id} game={item} />)

                    })
                }



            </div>
        )
    }
}
//функция мапСтейтТуПропс описывает то как нужно получать данные из хранилища редакс
//эта функция возвращает объект, где ключи -- это пропсы которые передадутся обернтому компоненту (в connect)
//а значения ключей -- это значения из хранилища стор
//state - это состояние их хранилища стор (из reducer.js)
const mapStateToProps = (state) => {
    return {
        games: state.games,
        loading: state.loading,
        error: state.errorMessage
    }
}

// функция мапДиспатчТуПропс позволяет компоненту записывать данные в хранилище редакс

// эта функция которая принимает функцию диспатч из пакета редакс
// вернет объект где ключи это названия функций которые будут переданы как пропсы объекту
// а значения -- метод (функция), которая передаст данные в хранилище стор

// 1 первая версия использования mapDispatchToProps
// const mapDispatchToProps = (dispatch) => { 
//     return {
//         gamesLoaded: (games) => {
//             dispatch(gamesLoaded(games))
//         }
//     }
// }

// 2 первая версия использования mapDispatchToProps
// использование функции bindActionCreators, которая возвращает тот же самый объект
// она связывает экшнКреэйтор с хранилищем через dispatch
// в качестве первого аргумента она принимает экшнриейторы (можно целый объект actions/либо диструктуризировать, как показано ниже)
// а в качестве второго функцию диспатч
// (bindActionCreators) обернет экшнриейтор таким образом, что при вызове действия она 
// автоматически будет передавать экшн в диспатч и изменять хранилище

// const mapDispatchToProps = (dispatch) => { 
//     return bindActionCreators({gamesLoaded}, dispatch)

// }

// 3 первая версия использования mapDispatchToProps
// если в мапдиспатчтупропс вложить простой объект с экшкриейтором и передать его 
// в коннект как второй аргумент то он автоматически создаст необходимую структуру как показано в результатах
// выше

// const mapDispatchToProps = {
//     gamesLoaded, gamesRequested, hasError
// }

// свойство ownProps которое содержится в функции connect, принимает в себя все данные которые передают в него сверху 
// по иерархии (в данном случае withService(connect(component))))
// таким образом можно передавать различные данные как пропертис (свойства) в функцию connect ( c помощью mapDispacthToProps/ToState)
// эти данные в последствие можно извлечь из пропсов обернутого компонента и использовать
// ниже на примере показано как используется функциональная версия mapDispacthToProps в которой изымается сервис
// поскольку коннект тоже обернут в hoc withService, он тоже ему доступен, через аргумент ownProps которое является свойством
// затем  результирующий объект с ключом (функцией) фетчингГеймс был помещен в жизненый цикл и был использован

const mapDispatchToProps = (dispatch, ownProps) => {
    const { serviceGame } = ownProps;
    return {
        fetchingGames: () => {
            
        dispatch(gamesRequested())
        serviceGame.getResource()
            .then((data) => {
                dispatch(gamesLoaded(data))
            }).catch(error => {
                dispatch(hasError(error))
            })
        } 
    }
}


export default withService(connect(mapStateToProps, mapDispatchToProps)(GameListItem));