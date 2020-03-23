'use strict';
module.exports = (sequelize, DataTypes) => {
  class Report extends sequelize.Sequelize.Model {}
  Report.init({
    report: {
      type:  DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          args: true,
          msg: 'report must be an integer'
        },
        notNull: {
          args: true,
          msg: 'report must be filled'
        }
      }
    },
    CountryId: {
      type:  DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          args: true,
          msg: 'CountryId must be an integer'
        },
        notNull: {
          args: true,
          msg: 'CountryId must be filled'
        }
      }
    },
    UserId: {
      type:  DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          args: true,
          msg: 'UserId must be an integer'
        },
        notNull: {
          args: true,
          msg: 'UserId must be filled'
        }
      }
    }
  },{
    sequelize,
    modelName: 'Report'
  })
  Report.associate = function(models) {
    // associations can be defined here
    Report.belongsTo(models.User)
    Report.belongsTo(models.Country)
  };
  return Report;
};