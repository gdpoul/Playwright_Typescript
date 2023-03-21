import { FullConfig } from "@playwright/test";
import admZip from 'adm-zip';

async function globalTeardown(config:FullConfig) {
 
   const reportPath= config.rootDir + "\\html-report";
   var zip=new admZip();
   zip.addLocalFolder(reportPath,"./report");
   zip.writeZip("./report.zip")
}
export default globalTeardown;
