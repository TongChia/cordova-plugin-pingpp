/**
 * Created by tongchia on 16/3/17.
 */
module.exports = function(ctx) {

  var r = ctx.requireCordovaModule
    , path = r('path')
    , d = r('q').defer()
    , shell = r('shelljs')
    , style = r('ansi-styles')
    , platform = ctx.opts.plugin.platform
    , sdk_path = path.join(ctx.opts.plugin.dir, 'sdk', platform)
    , sdk_url = 'https://github.com/PingPlusPlus/pingpp-'+platform+'.git';

  if (shell.test('-e', sdk_path)) { d.resolve(); }
  else {
    if (!shell.which('git')) d.reject('Can not request git');

    shell.echo(style.cyan.open + 'Cloning ping++ ' + platform + ' SDK, Please wait...' + style.cyan.close);

    shell.exec(['git', 'clone', sdk_url, sdk_path].join(' '), {stdio: 'inherit'}).code == 0
      ? d.resolve()
      : d.reject('Clone ' + platform + ' SDK failed!');
  }

  return d.promise;
};
