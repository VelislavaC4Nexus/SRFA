
var CustomObjectMgr = require("dw/object/CustomObjectMgr");
var Transaction = require("dw/system/Transaction");
var { File, FileWriter, CSVStreamWriter } = require("dw/io");
var Logger = require("dw/system/Logger");

module.exports.execute = function () {
    var newsletterObjectIterator = CustomObjectMgr.getAllCustomObjects('NEWSLETTER_SUBSCRIPTION_CO_HW');
    var csvSw;
    var file;
    var fileWriter;

    try {
        file = new File([File.IMPEX, "newsletter.csv"].join(File.SEPARATOR));
        fileWriter = new FileWriter(file);

        csvSw = new CSVStreamWriter(fileWriter);

        var customAttributes = ["firstname", "lastname", "email", "gender"];
        csvSw.writeNext(customAttributes);

        while (newsletterObjectIterator.hasNext()) {
            var newsletterPresentation = newsletterObjectIterator.next();

            csvSw.writeNext([
                newsletterPresentation.custom.firstname,
                newsletterPresentation.custom.lastname,
                newsletterPresentation.custom.email,
                newsletterPresentation.custom.gender,
            ]);
        }
    } catch (e) {
        var logger = Logger.getLogger('DemoLog', 'Job');
        logger.error(e.message);
    } finally {
        if (csvSw && 'close' in csvSw) {
            csvSw.close();
        }
        fileWriter.close();
    }
}