const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

function run() {

    // Get the input values
    const bucket = core.getInput('bucket', { required: true} )
    const bucketRegion = core.getInput('bucket-region', { required: true} )
    const distFolder = core.getInput('dist-folder', { required: true} )
    const htmlFile = core.getInput('html-file', { required: true })

    // Upload files
    const s3Uri = `s3://${bucket}`
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`)

    // Output

    const websiteUrl = `http://${bucket}.s3.${bucketRegion}.amazonaws.com/${htmlFile}`
    core.setOutput('website-url', websiteUrl)


}

run()