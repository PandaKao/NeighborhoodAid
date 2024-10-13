import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/connection.js';  // Assuming your connection.js exports the Sequelize instance

// Define the ReportAuthority model
class ReportAuthority extends Model {
}

ReportAuthority.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    weather: {
      type: DataTypes.JSONB,  // Store weather data as JSON object
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,  // Full address
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,  // City name
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contacted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,  // Assuming userId references the user who submitted the report
    }
  }, 
  {
    sequelize,
    modelName: "ReportAuthority",
    tableName: "ReportAuthority",
    timestamps: true,
  }
)

export default ReportAuthority;