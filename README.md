# Deploy to AWS S3

This action deploys a static website via AWS S3.

## Inputs

### `bucket`

**Required** The S3 bucket name.

### `bucket-region`

**Required** The region of the S3 bucket. Default `"us-east-1"`.

### `dist-folder`

**Required** The folder containing the deployable files.

### `html-file`

**Required** The folder name of the html file.


## Outputs

### `website-url`

**Required** The URL of the deployed website.


## Example usage

```yaml
uses: moonyc/javascript-action@v2.7
with:
  bucket: aws-s3-bucket-name
  bucket-region: 'us-east-1'
  dist-folder: 'dist'
  html-file: 'index.html'

```
