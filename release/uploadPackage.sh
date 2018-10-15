EMAIL=$1
PASS=$2

npm i -g @pnp/office365-cli
o365 version

# you have to run "o365 spo login https://contoso.sharepoint.com"
# to agree with the consent first time

o365 spo login https://velingeorgiev.sharepoint.com --authType password --userName $EMAIL --password $PASS

o365 spo app add --filePath "./_SPFx build/SPFx sppkg/react-jest-testing.sppkg" --overwrite --verbose