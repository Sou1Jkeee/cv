document.addEventListener('DOMContentLoaded', function() {
    moment.locale('ru');
    let now = moment();
    let stDate = moment('20201008');
    let eoDate = moment('20210709');
    let expDate = moment('20190909');
    let age = moment('19890902');

    document.getElementById('age').append(moment.duration(now.diff(age, 'years'), 'years').humanize());
    document.getElementById('exp').append(moment.duration(now.diff(expDate)).humanize());
    document.getElementById('eo').append(moment.duration(now.diff(eoDate, 'month') + 1, 'month').humanize());
    document.getElementById('st').append(moment.duration(eoDate.diff(stDate, 'month') + 1, 'month').humanize());
}, false);
