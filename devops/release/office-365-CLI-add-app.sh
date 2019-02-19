SITE_URL=$1
EMAIL=$2
PASS=$3
SCOPE=$4

npm i -g @pnp/office365-cli
o365 version

# you have to run "o365 spo login https://contoso.sharepoint.com"
# to agree with the consent first time

o365 spo login $SITE_URL --authType password --userName $EMAIL --password $PASS

o365 spo app add --filePath "./_SPFx build/SPFx sppkg/react-jest-testing.sppkg" --scope $SCOPE --overwrite

o365 spo app deploy --name react-jest-testing.sppkg --scope $SCOPE --skipFeatureDeployment