import Sequelize from 'sequelize'

import databaseConfig from '../config/database'
import User from '../app/models/User'


const models = [ User ]

class DataBase {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(databaseConfig.url)
        models.map(model => model.init(this.connection))
    }
}


export default new DataBase()