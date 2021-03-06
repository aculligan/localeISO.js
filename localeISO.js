(function () {

  const isoCountries = {
    ad: {
      name: 'Andorra',
      localName: 'Andorra'
    },
    ae: {
      name: 'United Arab Emirates',
      localName: '\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629'
    },
    af: {
      name: 'Afghanistan',
      localName: '\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646'
    },
    ag: {
      name: 'Antigua and Barbuda',
      localName: 'Antigua and Barbuda'
    },
    ai: {
      name: 'Anguilla',
      localName: 'Anguilla'
    },
    al: {
      name: 'Albania',
      localName: 'Shqip\xEBria'
    },
    am: {
      name: 'Armenia',
      localName: '\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576'
    },
    an: {
      name: 'Netherlands Antilles',
      localName: 'Nederlandse Antillen'
    },
    ao: {
      name: 'Angola',
      localName: 'Angola'
    },
    aq: {
      name: 'Antarctica',
      localName: 'Antarctica'
    },
    ar: {
      name: 'Argentina',
      localName: 'Argentina'
    },
    as: {
      name: 'American Samoa',
      localName: 'American Samoa'
    },
    at: {
      name: 'Austria',
      localName: '\xD6sterreich'
    },
    au: {
      name: 'Australia',
      localName: 'Australia'
    },
    aw: {
      name: 'Aruba',
      localName: 'Aruba'
    },
    ax: {
      name: 'Aland Islands',
      localName: 'Landskapet \xC5land'
    },
    az: {
      name: 'Azerbaijan',
      localName: 'Az\u0259rbaycan'
    },
    ba: {
      name: 'Bosnia and Herzegovina',
      localName: 'Bosna i Hercegovina'
    },
    bb: {
      name: 'Barbados',
      localName: 'Barbados'
    },
    bd: {
      name: 'Bangladesh',
      localName: '\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6'
    },
    be: {
      name: 'Belgium',
      localName: 'Belgi\xEB'
    },
    bf: {
      name: 'Burkina Faso',
      localName: 'Burkina Faso'
    },
    bg: {
      name: 'Bulgaria',
      localName: 'B\u01CElgariya'
    },
    bh: {
      name: 'Bahrain',
      localName: '\u0627\u0644\u0628\u062D\u0631\u064A\u0646\u200E\u200E'
    },
    bi: {
      name: 'Burundi',
      localName: 'Burundi'
    },
    bj: {
      name: 'Benin',
      localName: 'B\xE9nin'
    },
    bl: {
      name: 'Saint-Barth\xE9lemy',
      localName: 'Saint-Barth\xE9lemy'
    },
    bm: {
      name: 'Bermuda',
      localName: 'Bermuda'
    },
    bn: {
      name: 'Brunei',
      localName: 'Brunei'
    },
    bo: {
      name: 'Bolivia',
      localName: 'Bolivia'
    },
    bq: {
      name: 'Caribbean Netherlands',
      localName: 'Caribisch Nederland '
    },
    br: {
      name: 'Brazil',
      localName: 'Brasil'
    },
    bs: {
      name: 'The Bahamas',
      localName: 'The Bahamas'
    },
    bt: {
      name: 'Bhutan',
      localName: 'Druk-yul'
    },
    bv: {
      name: 'Bouvet Island',
      localName: 'Bouvet\xF8ya'
    },
    bw: {
      name: 'Botswana',
      localName: 'Botswana'
    },
    by: {
      name: 'Belarus',
      localName: '\u0411\u0435\u043B\u0430\u0440\u0443\u0301\u0441\u044C'
    },
    bz: {
      name: 'Belize',
      localName: 'Belize'
    },
    ca: {
      name: 'Canada',
      localName: 'Canada'
    },
    cc: {
      name: 'Cocos (Keeling) Islands',
      localName: 'Cocos (Keeling) Islands'
    },
    cd: {
      name: 'Democratic Republic of the Congo',
      localName: 'R\xE9publique d\xE9mocratique du Congo'
    },
    cf: {
      name: 'Central African Republic',
      localName: 'R\xE9publique centrafricaine'
    },
    cg: {
      name: 'Republic of the Congo',
      localName: 'R\xE9publique du Congo'
    },
    ch: {
      name: 'Switzerland',
      localName: 'Schweiz'
    },
    ci: {
      name: 'Ivory Coast',
      localName: 'C\xF4te d\'Ivoire'
    },
    ck: {
      name: 'Cook Islands',
      localName: 'K\u016Bki \'\u0100irani'
    },
    cl: {
      name: 'Chile',
      localName: 'Chile'
    },
    cm: {
      name: 'Cameroon',
      localName: 'Cameroun'
    },
    cn: {
      name: 'China',
      localName: '\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD'
    },
    co: {
      name: 'Colombia',
      localName: 'Colombia'
    },
    cr: {
      name: 'Costa Rica',
      localName: 'Costa Rica'
    },
    cu: {
      name: 'Cuba',
      localName: 'Cuba'
    },
    cv: {
      name: 'Cape Verde',
      localName: 'Cabo Verde'
    },
    cw: {
      name: 'Cura\xE7ao',
      localName: 'Cura\xE7ao'
    },
    cx: {
      name: 'Christmas Island',
      localName: 'Christmas Island'
    },
    cy: {
      name: 'Cyprus',
      localName: '\u039A\u03CD\u03C0\u03C1\u03BF\u03C2'
    },
    cz: {
      name: 'Czech Republic',
      localName: '\u010Cesk\xE1 republika'
    },
    de: {
      name: 'Germany',
      localName: 'Deutschland'
    },
    dj: {
      name: 'Djibouti',
      localName: 'Djibouti'
    },
    dk: {
      name: 'Denmark',
      localName: 'Danmark'
    },
    dm: {
      name: 'Dominica',
      localName: 'Dominica'
    },
    do: {
      name: 'Dominican Republic',
      localName: 'Rep\xFAblica Dominicana '
    },
    dz: {
      name: 'Algeria',
      localName: '\u0627\u0644\u062C\u0632\u0627\u0626\u0631\u200E\u200E'
    },
    ec: {
      name: 'Ecuador',
      localName: 'Ecuador'
    },
    ee: {
      name: 'Estonia',
      localName: 'Eesti'
    },
    eg: {
      name: 'Egypt',
      localName: '\u0645\u0650\u0635\u0631\u200E\u200E'
    },
    eh: {
      name: 'Western Sahara',
      localName: '\u0627\u0644\u0635\u062D\u0631\u0627\u0621 \u0627\u0644\u063A\u0631\u0628\u064A\u0629'
    },
    er: {
      name: 'Eritrea',
      localName: 'Eritrea'
    },
    es: {
      name: 'Spain',
      localName: 'Espa\xF1a'
    },
    et: {
      name: 'Ethiopia',
      localName: '\u12A2\u1275\u12EE\u1335\u12EB'
    },
    fi: {
      name: 'Finland',
      localName: 'Suomi'
    },
    fj: {
      name: 'Fiji',
      localName: 'Viti'
    },
    fk: {
      name: 'Falkland Islands',
      localName: 'Falkland Islands'
    },
    fm: {
      name: 'Micronesia',
      localName: 'Micronesia'
    },
    fo: {
      name: 'Faroe Islands',
      localName: 'F\xF8royar'
    },
    fr: {
      name: 'France',
      localName: 'France'
    },
    ga: {
      name: 'Gabon',
      localName: 'Gabon'
    },
    gb: {
      name: 'United Kingdom',
      localName: 'United Kingdom'
    },
    gd: {
      name: 'Grenada',
      localName: 'Grenada'
    },
    ge: {
      name: 'Georgia',
      localName: '\u10E1\u10D0\u10E5\u10D0\u10E0\u10D7\u10D5\u10D4\u10DA\u10DD'
    },
    gf: {
      name: 'French Guiana',
      localName: 'Guyane fran\xE7aise'
    },
    gg: {
      name: 'Guernsey',
      localName: 'Guernsey'
    },
    gh: {
      name: 'Ghana',
      localName: 'Ghana'
    },
    gi: {
      name: 'Gibraltar',
      localName: 'Gibraltar'
    },
    gl: {
      name: 'Greenland',
      localName: 'Kalaallit Nunaat'
    },
    gm: {
      name: 'The Gambia',
      localName: 'The Gambia'
    },
    gn: {
      name: 'Guinea',
      localName: 'Guin\xE9e'
    },
    gp: {
      name: 'Guadeloupe',
      localName: 'Guadeloupe'
    },
    gq: {
      name: 'Equatorial Guinea',
      localName: 'Guinea Ecuatorial  '
    },
    gr: {
      name: 'Greece',
      localName: '\u0395\u03BB\u03BB\u03AC\u03B4\u03B1'
    },
    gs: {
      name: 'South Georgia and the South Sandwich Islands',
      localName: 'South Georgia and the South Sandwich Islands'
    },
    gt: {
      name: 'Guatemala',
      localName: 'Guatemala'
    },
    gu: {
      name: 'Guam',
      localName: 'Gu\xE5h\xE5n'
    },
    gw: {
      name: 'Guinea-Bissau',
      localName: 'Guin\xE9-Bissau '
    },
    gy: {
      name: 'Guyana',
      localName: 'Guyana'
    },
    hk: {
      name: 'Hong Kong',
      localName: '\u9999\u6E2F'
    },
    hm: {
      name: 'Heard Island and McDonald Islands',
      localName: 'Heard Island and McDonald Islands'
    },
    hn: {
      name: 'Honduras',
      localName: 'Honduras'
    },
    hr: {
      name: 'Croatia',
      localName: 'Hrvatska'
    },
    ht: {
      name: 'Haiti',
      localName: 'Ha\xEFti'
    },
    hu: {
      name: 'Hungary',
      localName: 'Magyarorsz\xE1g'
    },
    id: {
      name: 'Indonesia',
      localName: 'Indonesia'
    },
    ie: {
      name: 'Ireland',
      localName: '\xC9ire'
    },
    il: {
      name: 'Israel',
      localName: '\u05D9\u05B4\u05E9\u05B0\u05C2\u05E8\u05B8\u05D0\u05B5\u05DC\u200E'
    },
    im: {
      name: 'Isle of Man',
      localName: 'Isle of Man'
    },
    in: {
      name: 'India',
      localName: 'Bh\u0101rat'
    },
    io: {
      name: 'British Indian Ocean Territory',
      localName: 'British Indian Ocean Territory'
    },
    iq: {
      name: 'Iraq',
      localName: '\u0627\u0644\u0639\u0631\u0627\u0642\u200E\u200E'
    },
    ir: {
      name: 'Iran',
      localName: '\u0627\u06CC\u0631\u0627\u0646\u200E\u200E'
    },
    is: {
      name: 'Iceland',
      localName: '\xCDsland'
    },
    it: {
      name: 'Italy',
      localName: 'Italia'
    },
    je: {
      name: 'Jersey',
      localName: 'Jersey'
    },
    jm: {
      name: 'Jamaica',
      localName: 'Jamaica'
    },
    jo: {
      name: 'Jordan',
      localName: '\u0627\u0644\u0623\u0631\u062F\u0646\u200E\u200E'
    },
    jp: {
      name: 'Japan',
      localName: '\u65E5\u672C'
    },
    ke: {
      name: 'Kenya',
      localName: 'Kenya'
    },
    kg: {
      name: 'Kyrgyzstan',
      localName: '\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u0442\u0430\u043D'
    },
    kh: {
      name: 'Cambodia',
      localName: '\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6'
    },
    ki: {
      name: 'Kiribati',
      localName: 'Kiribati'
    },
    km: {
      name: 'Comoros',
      localName: '\u062C\u0632\u0631 \u0627\u0644\u0642\u0645\u0631'
    },
    kn: {
      name: 'Saint Kitts and Nevis',
      localName: 'Saint Kitts and Nevis'
    },
    kp: {
      name: 'North Korea',
      localName: '\uC870\uC120\uBBFC\uC8FC\uC8FC\uC758\uC778\uBBFC\uACF5\uD654\uAD6D'
    },
    kr: {
      name: 'South Korea',
      localName: '\uB300\uD55C\uBBFC\uAD6D'
    },
    kw: {
      name: 'Kuwait',
      localName: '\u0627\u0644\u0643\u0648\u064A\u062A\u200E\u200E'
    },
    ky: {
      name: 'Cayman Islands',
      localName: 'Cayman Islands'
    },
    kz: {
      name: 'Kazakhstan',
      localName: '\u049A\u0430\u0437\u0430\u049B\u0441\u0442\u0430\u043D'
    },
    la: {
      name: 'Laos',
      localName: '\u0EA5\u0EB2\u0EA7'
    },
    lb: {
      name: 'Lebanon',
      localName: '\u0644\u0628\u0646\u0627\u0646\u200E\u200E'
    },
    lc: {
      name: 'Saint Lucia',
      localName: 'Saint Lucia'
    },
    li: {
      name: 'Liechtenstein',
      localName: 'Liechtenstein'
    },
    lk: {
      name: 'Sri Lanka',
      localName: '\u0DC1\u0DCA\u200D\u0DBB\u0DD3 \u0DBD\u0D82\u0D9A\u0DCF'
    },
    lr: {
      name: 'Liberia',
      localName: 'Liberia'
    },
    ls: {
      name: 'Lesotho',
      localName: 'Lesotho'
    },
    lt: {
      name: 'Lithuania',
      localName: 'Lietuva'
    },
    lu: {
      name: 'Luxembourg',
      localName: 'L\xEBtzebuerg'
    },
    lv: {
      name: 'Latvia',
      localName: 'Latvija'
    },
    ly: {
      name: 'Libya',
      localName: '\u0644\u064A\u0628\u064A\u0627\u200E\u200E'
    },
    ma: {
      name: 'Morocco',
      localName: '\u0627\u0644\u0645\u063A\u0631\u0628\u200E\u200E'
    },
    mc: {
      name: 'Monaco',
      localName: 'Monaco'
    },
    md: {
      name: 'Moldova',
      localName: 'Moldova'
    },
    me: {
      name: 'Montenegro',
      localName: 'Crna Gora'
    },
    mf: {
      name: 'Saint Martin',
      localName: 'Saint-Martin'
    },
    mg: {
      name: 'Madagascar',
      localName: 'Madagasikara'
    },
    mh: {
      name: 'Marshall Islands',
      localName: 'Aolep\u0101n Aor\u014Dkin M\u0327aje\u013C'
    },
    mk: {
      name: 'Macedonia',
      localName: '\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430'
    },
    ml: {
      name: 'Mali',
      localName: 'Mali'
    },
    mm: {
      name: 'Myanmar',
      localName: 'My\u0103ma'
    },
    mn: {
      name: 'Mongolia',
      localName: '\u041C\u043E\u043D\u0433\u043E\u043B \u0423\u043B\u0441'
    },
    mo: {
      name: 'Macao',
      localName: '\u6FB3\u9580; \u6FB3\u95E8'
    },
    mp: {
      name: 'Northern Mariana Islands',
      localName: 'Northern Mariana Islands'
    },
    mq: {
      name: 'Martinique',
      localName: 'Martinique'
    },
    mr: {
      name: 'Mauritania',
      localName: '\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627\u200E\u200E'
    },
    ms: {
      name: 'Montserrat',
      localName: 'Montserrat'
    },
    mt: {
      name: 'Malta',
      localName: 'Malta'
    },
    mu: {
      name: 'Mauritius',
      localName: 'Maurice'
    },
    mv: {
      name: 'Maldives',
      localName: 'Dhivehi Raajje'
    },
    mw: {
      name: 'Malawi',
      localName: 'Mala\u0175i'
    },
    mx: {
      name: 'Mexico',
      localName: 'M\xE9xico'
    },
    my: {
      name: 'Malaysia',
      localName: 'Malaysia'
    },
    mz: {
      name: 'Mozambique',
      localName: 'Mo\xE7ambique'
    },
    na: {
      name: 'Namibia',
      localName: 'Namibia'
    },
    nc: {
      name: 'New Caledonia',
      localName: 'Nouvelle-Cal\xE9donie'
    },
    ne: {
      name: 'Niger',
      localName: 'Niger'
    },
    nf: {
      name: 'Norfolk Island',
      localName: 'Norf\'k Ailen'
    },
    ng: {
      name: 'Nigeria',
      localName: 'Nijeriya'
    },
    ni: {
      name: 'Nicaragua',
      localName: 'Nicaragua'
    },
    nl: {
      name: 'Netherlands',
      localName: 'Nederland'
    },
    no: {
      name: 'Norway',
      localName: 'Norge'
    },
    np: {
      name: 'Nepal',
      localName: '\u0928\u0947\u092A\u093E\u0932'
    },
    nr: {
      name: 'Nauru',
      localName: 'Naoero'
    },
    nu: {
      name: 'Niue',
      localName: 'Niu\u0113'
    },
    nz: {
      name: 'New Zealand',
      localName: 'New Zealand'
    },
    om: {
      name: 'Oman',
      localName: '\u0639\u0645\u0627\u0646\u200E\u200E'
    },
    pa: {
      name: 'Panama',
      localName: 'Panam\xE1'
    },
    pe: {
      name: 'Peru',
      localName: 'Per\xFA'
    },
    pf: {
      name: 'French Polynesia',
      localName: 'Polyn\xE9sie fran\xE7aise'
    },
    pg: {
      name: 'Papua New Guinea',
      localName: 'Papua Niugini'
    },
    ph: {
      name: 'Philippines',
      localName: 'Pilipinas'
    },
    pk: {
      name: 'Pakistan',
      localName: '\u067E\u0627\u0643\u0633\u062A\u0627\u0646'
    },
    pl: {
      name: 'Poland',
      localName: 'Polska'
    },
    pm: {
      name: 'Saint Pierre and Miquelon',
      localName: 'Saint-Pierre-et-Miquelon'
    },
    pn: {
      name: 'Pitcairn Islands',
      localName: 'Pitkern Ailen'
    },
    pr: {
      name: 'Puerto Rico',
      localName: 'Puerto Rico'
    },
    ps: {
      name: 'State of Palestine',
      localName: '\u062F\u0648\u0644\u0629 \u0641\u0644\u0633\u0637\u064A\u0646'
    },
    pt: {
      name: 'Portugal',
      localName: 'Portugal'
    },
    pw: {
      name: 'Palau',
      localName: 'Belau'
    },
    py: {
      name: 'Paraguay',
      localName: 'Paraguay'
    },
    qa: {
      name: 'Qatar',
      localName: '\u0642\u0637\u0631\u200E\u200E'
    },
    re: {
      name: 'R\xE9union',
      localName: 'La R\xE9union'
    },
    ro: {
      name: 'Romania',
      localName: 'Rom\xE2nia'
    },
    rs: {
      name: 'Serbia',
      localName: '\u0421\u0440\u0431\u0438\u0458\u0430'
    },
    ru: {
      name: 'Russia',
      localName: '\u0420\u043E\u0441\u0441\u0438\u0301\u044F'
    },
    rw: {
      name: 'Rwanda',
      localName: 'Rwanda'
    },
    sa: {
      name: 'Saudi Arabia',
      localName: '\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629'
    },
    sb: {
      name: 'Solomon Islands',
      localName: 'Solomon Islands'
    },
    sc: {
      name: 'Seychelles',
      localName: 'Seychelles'
    },
    sd: {
      name: 'Sudan',
      localName: '\u0627\u0644\u0633\u0648\u062F\u0627\u0646\u200E\u200E'
    },
    se: {
      name: 'Sweden',
      localName: 'Sverige'
    },
    sg: {
      name: 'Singapore',
      localName: 'Singapura'
    },
    sh: {
      name: 'Saint Helena, Ascension and Tristan da Cunha',
      localName: 'Saint Helena, Ascension and Tristan da Cunha'
    },
    si: {
      name: 'Slovenia',
      localName: 'Slovenija'
    },
    sj: {
      name: 'Svalbard and Jan Mayen Islands',
      localName: 'Svalbard og Jan Mayen'
    },
    sk: {
      name: 'Slovakia',
      localName: 'Slovensko'
    },
    sl: {
      name: 'Sierra Leone',
      localName: 'Sierra LeoneSan Marino'
    },
    sm: {
      name: 'San Marino',
      localName: 'San Marino'
    },
    sn: {
      name: 'Senegal',
      localName: 'S\xE9n\xE9gal'
    },
    so: {
      name: 'Somalia',
      localName: 'Soomaaliya'
    },
    sr: {
      name: 'Suriname',
      localName: 'Suriname'
    },
    ss: {
      name: 'South Sudan',
      localName: 'South Sudan'
    },
    st: {
      name: 'S\xE3o Tom\xE9 and Pr\xEDncipe',
      localName: 'S\xE3o Tom\xE9 e Pr\xEDncipe '
    },
    sv: {
      name: 'El Salvador',
      localName: 'El Salvador'
    },
    sx: {
      name: 'Sint Maarten',
      localName: 'Sint Maarten'
    },
    sy: {
      name: 'Syria',
      localName: '\u0633\u0648\u0631\u064A\u0627\u200E\u200E'
    },
    sz: {
      name: 'Swaziland',
      localName: 'eSwatini'
    },
    tc: {
      name: 'Turks and Caicos Islands',
      localName: 'Turks and Caicos Islands'
    },
    td: {
      name: 'Chad',
      localName: '\u062A\u0634\u0627\u062F\u200E\u200E'
    },
    tf: {
      name: 'French Southern and Antarctic Lands',
      localName: 'Terres australes et antarctiques fran\xE7aises'
    },
    tg: {
      name: 'Togo',
      localName: 'Togo'
    },
    th: {
      name: 'Thailand',
      localName: '\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E44\u0E17\u0E22'
    },
    tj: {
      name: 'Tajikistan',
      localName: '\u0422\u043E\u04B7\u0438\u043A\u0438\u0441\u0442\u043E\u043D'
    },
    tk: {
      name: 'Tokelau',
      localName: 'Tokelau'
    },
    tl: {
      name: 'East Timor',
      localName: 'Tim\xF3r-Leste'
    },
    tm: {
      name: 'Turkmenistan',
      localName: 'T\xFCrkmenistan'
    },
    tn: {
      name: 'Tunisia',
      localName: '\u062A\u0648\u0646\u0633\u200E\u200E'
    },
    to: {
      name: 'Tonga',
      localName: 'Tonga'
    },
    tr: {
      name: 'Turkey',
      localName: 'T\xFCrkiye'
    },
    tt: {
      name: 'Trinidad and Tobago',
      localName: 'Trinidad and Tobago'
    },
    tv: {
      name: 'Tuvalu',
      localName: 'Tuvalu'
    },
    tw: {
      name: 'Taiwan',
      localName: '\u53F0\u6E7E'
    },
    tz: {
      name: 'Tanzania',
      localName: 'Tanzania'
    },
    ua: {
      name: 'Ukraine',
      localName: '\u0423\u043A\u0440\u0430\u0457\u043D\u0430'
    },
    ug: {
      name: 'Uganda',
      localName: 'Uganda'
    },
    um: {
      name: 'United States Minor Outlying Islands',
      localName: 'United States Minor Outlying Islands'
    },
    us: {
      name: 'United States of America',
      localName: 'United States of America'
    },
    uy: {
      name: 'Uruguay',
      localName: 'Uruguay'
    },
    uz: {
      name: 'Uzbekistan',
      localName: 'O\u02BBzbekiston'
    },
    va: {
      name: 'Vatican City',
      localName: 'Citt\xE0 del Vaticano '
    },
    vc: {
      name: 'Saint Vincent and Grenadines',
      localName: 'Saint Vincent and the Grenadines'
    },
    ve: {
      name: 'Venezuela',
      localName: 'Venezuela'
    },
    vg: {
      name: 'British Virgin Islands',
      localName: 'British Virgin Islands'
    },
    vi: {
      name: 'United States Virgin Islands',
      localName: 'United States Virgin Islands'
    },
    vn: {
      name: 'Vietnam',
      localName: 'Vi\u1EC7t Nam'
    },
    vu: {
      name: 'Vanuatu',
      localName: 'Vanuatu'
    },
    wf: {
      name: 'Wallis and Futuna',
      localName: 'Wallis-et-Futuna'
    },
    ws: {
      name: 'Samoa',
      localName: 'S\u0101moa'
    },
    ye: {
      name: 'Yemen',
      localName: '\u0627\u0644\u064A\u064E\u0645\u064E\u0646\u200E\u200E'
    },
    yt: {
      name: 'Mayotte',
      localName: 'Mayotte'
    },
    za: {
      name: 'South Africa',
      localName: 'South Africa'
    },
    zm: {
      name: 'Zambia',
      localName: 'Zambia'
    },
    zw: {
      name: 'Zimbabwe',
      localName: 'yeZimbabwe'
    }
  };
  const isoLangs = {
    aa: {
      name: 'Afar',
      localName: 'Afaraf'
    },
    ab: {
      name: 'Abkhaz',
      localName: '\u0430\u04A7\u0441\u0443\u0430'
    },
    ae: {
      name: 'Avestan',
      localName: 'avesta'
    },
    af: {
      name: 'Afrikaans',
      localName: 'Afrikaans'
    },
    ak: {
      name: 'Akan',
      localName: 'Akan'
    },
    am: {
      name: 'Amharic',
      localName: '\u12A0\u121B\u122D\u129B'
    },
    an: {
      name: 'Aragonese',
      localName: 'Aragon\xE9s'
    },
    ar: {
      name: 'Arabic',
      localName: '\u0627\u0644\u0639\u0631\u0628\u064A\u0629'
    },
    as: {
      name: 'Assamese',
      localName: '\u0985\u09B8\u09AE\u09C0\u09AF\u09BC\u09BE'
    },
    av: {
      name: 'Avaric',
      localName: '\u0430\u0432\u0430\u0440 \u043C\u0430\u0446\u04C0, \u043C\u0430\u0433\u04C0\u0430\u0440\u0443\u043B \u043C\u0430\u0446\u04C0'
    },
    ay: {
      name: 'Aymara',
      localName: 'aymar aru'
    },
    az: {
      name: 'Azerbaijani',
      localName: 'az\u0259rbaycan dili'
    },
    ba: {
      name: 'Bashkir',
      localName: '\u0431\u0430\u0448\u04A1\u043E\u0440\u0442 \u0442\u0435\u043B\u0435'
    },
    be: {
      name: 'Belarusian',
      localName: '\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F'
    },
    bg: {
      name: 'Bulgarian',
      localName: '\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 \u0435\u0437\u0438\u043A'
    },
    bh: {
      name: 'Bihari',
      localName: '\u092D\u094B\u091C\u092A\u0941\u0930\u0940'
    },
    bi: {
      name: 'Bislama',
      localName: 'Bislama'
    },
    bm: {
      name: 'Bambara',
      localName: 'bamanankan'
    },
    bn: {
      name: 'Bengali',
      localName: '\u09AC\u09BE\u0982\u09B2\u09BE'
    },
    bo: {
      name: 'Tibetan Standard, Tibetan, Central',
      localName: '\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42'
    },
    br: {
      name: 'Breton',
      localName: 'brezhoneg'
    },
    bs: {
      name: 'Bosnian',
      localName: 'bosanski jezik'
    },
    ca: {
      name: 'Catalan; Valencian',
      localName: 'Catal\xE0'
    },
    ce: {
      name: 'Chechen',
      localName: '\u043D\u043E\u0445\u0447\u0438\u0439\u043D \u043C\u043E\u0442\u0442'
    },
    ch: {
      name: 'Chamorro',
      localName: 'Chamoru'
    },
    co: {
      name: 'Corsican',
      localName: 'corsu, lingua corsa'
    },
    cr: {
      name: 'Cree',
      localName: '\u14C0\u1426\u1403\u152D\u140D\u140F\u1423'
    },
    cs: {
      name: 'Czech',
      localName: '\u010Desky, \u010De\u0161tina'
    },
    cu: {
      name: 'Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic',
      localName: '\u0469\u0437\u044B\u043A\u044A \u0441\u043B\u043E\u0432\u0463\u043D\u044C\u0441\u043A\u044A'
    },
    cv: {
      name: 'Chuvash',
      localName: '\u0447\u04D1\u0432\u0430\u0448 \u0447\u04D7\u043B\u0445\u0438'
    },
    cy: {
      name: 'Welsh',
      localName: 'Cymraeg'
    },
    da: {
      name: 'Danish',
      localName: 'dansk'
    },
    de: {
      name: 'German',
      localName: 'Deutsch'
    },
    dv: {
      name: 'Divehi; Dhivehi; Maldivian;',
      localName: '\u078B\u07A8\u0788\u07AC\u0780\u07A8'
    },
    dz: {
      name: 'Dzongkha',
      localName: '\u0F62\u0FAB\u0F7C\u0F44\u0F0B\u0F41\u0F0B'
    },
    ee: {
      name: 'Ewe',
      localName: 'E\u028Begbe'
    },
    el: {
      name: 'Greek, Modern',
      localName: '\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC'
    },
    en: {
      name: 'English',
      localName: 'English'
    },
    eo: {
      name: 'Esperanto',
      localName: 'Esperanto'
    },
    es: {
      name: 'Spanish',
      localName: 'espa\xF1ol'
    },
    et: {
      name: 'Estonian',
      localName: 'eesti, eesti keel'
    },
    eu: {
      name: 'Basque',
      localName: 'euskara, euskera'
    },
    fa: {
      name: 'Persian',
      localName: '\u0641\u0627\u0631\u0633\u06CC'
    },
    ff: {
      name: 'Fula; Fulah; Pulaar; Pular',
      localName: 'Fulfulde, Pulaar, Pular'
    },
    fi: {
      name: 'Finnish',
      localName: 'suomi, suomen kieli'
    },
    fj: {
      name: 'Fijian',
      localName: 'vosa Vakaviti'
    },
    fo: {
      name: 'Faroese',
      localName: 'f\xF8royskt'
    },
    fr: {
      name: 'French',
      localName: 'fran\xE7ais'
    },
    fy: {
      name: 'Western Frisian',
      localName: 'Frysk'
    },
    ga: {
      name: 'Irish',
      localName: 'Gaeilge'
    },
    gd: {
      name: 'Scottish Gaelic; Gaelic',
      localName: 'G\xE0idhlig'
    },
    gl: {
      name: 'Galician',
      localName: 'Galego'
    },
    gn: {
      name: 'Guaran\xED',
      localName: 'Ava\xF1e\u1EBD'
    },
    gu: {
      name: 'Gujarati',
      localName: '\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0'
    },
    gv: {
      name: 'Manx',
      localName: 'Gaelg, Gailck'
    },
    ha: {
      name: 'Hausa',
      localName: 'Hausa, \u0647\u064E\u0648\u064F\u0633\u064E'
    },
    he: {
      name: 'Hebrew',
      localName: '\u05E2\u05D1\u05E8\u05D9\u05EA'
    },
    hi: {
      name: 'Hindi',
      localName: '\u0939\u093F\u0928\u094D\u0926\u0940, \u0939\u093F\u0902\u0926\u0940'
    },
    ho: {
      name: 'Hiri Motu',
      localName: 'Hiri Motu'
    },
    hr: {
      name: 'Croatian',
      localName: 'hrvatski'
    },
    ht: {
      name: 'Haitian; Haitian Creole',
      localName: 'Krey\xF2l ayisyen'
    },
    hu: {
      name: 'Hungarian',
      localName: 'Magyar'
    },
    hy: {
      name: 'Armenian',
      localName: '\u0540\u0561\u0575\u0565\u0580\u0565\u0576'
    },
    hz: {
      name: 'Herero',
      localName: 'Otjiherero'
    },
    ia: {
      name: 'Interlingua',
      localName: 'Interlingua'
    },
    id: {
      name: 'Indonesian',
      localName: 'Bahasa Indonesia'
    },
    ie: {
      name: 'Interlingue',
      localName: 'Interlingue'
    },
    ig: {
      name: 'Igbo',
      localName: 'As\u1EE5s\u1EE5 Igbo'
    },
    ii: {
      name: 'Nuosu',
      localName: '\uA188\uA320\uA4BF Nuosuhxop'
    },
    ik: {
      name: 'Inupiaq',
      localName: 'I\xF1upiaq, I\xF1upiatun'
    },
    io: {
      name: 'Ido',
      localName: 'Ido'
    },
    is: {
      name: 'Icelandic',
      localName: '\xCDslenska'
    },
    it: {
      name: 'Italian',
      localName: 'Italiano'
    },
    iu: {
      name: 'Inuktitut',
      localName: '\u1403\u14C4\u1483\u144E\u1450\u1466'
    },
    ja: {
      name: 'Japanese',
      localName: '\u65E5\u672C\u8A9E'
    },
    jv: {
      name: 'Javanese',
      localName: 'basa Jawa'
    },
    ka: {
      name: 'Georgian',
      localName: '\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8'
    },
    kg: {
      name: 'Kongo',
      localName: 'KiKongo'
    },
    ki: {
      name: 'Kikuyu, Gikuyu',
      localName: 'G\u0129k\u0169y\u0169'
    },
    kj: {
      name: 'Kwanyama, Kuanyama',
      localName: 'Kuanyama'
    },
    kk: {
      name: 'Kazakh',
      localName: '\u049A\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456'
    },
    kl: {
      name: 'Kalaallisut, Greenlandic',
      localName: 'kalaallisut, kalaallit oqaasii'
    },
    km: {
      name: 'Khmer',
      localName: '\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A'
    },
    kn: {
      name: 'Kannada',
      localName: '\u0C95\u0CA8\u0CCD\u0CA8\u0CA1'
    },
    ko: {
      name: 'Korean',
      localName: '\uD55C\uAD6D\uC5B4 (\u97D3\u570B\u8A9E), \uC870\uC120\uB9D0 (\u671D\u9BAE\u8A9E)'
    },
    kr: {
      name: 'Kanuri',
      localName: 'Kanuri'
    },
    ks: {
      name: 'Kashmiri',
      localName: '\u0915\u0936\u094D\u092E\u0940\u0930\u0940, \u0643\u0634\u0645\u064A\u0631\u064A\u200E'
    },
    ku: {
      name: 'Kurdish',
      localName: 'Kurd\xEE, \u0643\u0648\u0631\u062F\u06CC\u200E'
    },
    kv: {
      name: 'Komi',
      localName: '\u043A\u043E\u043C\u0438 \u043A\u044B\u0432'
    },
    kw: {
      name: 'Cornish',
      localName: 'Kernewek'
    },
    ky: {
      name: 'Kirghiz, Kyrgyz',
      localName: '\u043A\u044B\u0440\u0433\u044B\u0437 \u0442\u0438\u043B\u0438'
    },
    la: {
      name: 'Latin',
      localName: 'latine, lingua latina'
    },
    lb: {
      name: 'Luxembourgish, Letzeburgesch',
      localName: 'L\xEBtzebuergesch'
    },
    lg: {
      name: 'Luganda',
      localName: 'Luganda'
    },
    li: {
      name: 'Limburgish, Limburgan, Limburger',
      localName: 'Limburgs'
    },
    ln: {
      name: 'Lingala',
      localName: 'Ling\xE1la'
    },
    lo: {
      name: 'Lao',
      localName: '\u0E9E\u0EB2\u0EAA\u0EB2\u0EA5\u0EB2\u0EA7'
    },
    lt: {
      name: 'Lithuanian',
      localName: 'lietuvi\u0173 kalba'
    },
    lu: {
      name: 'Luba-Katanga',
      localName: 'Kiluba'
    },
    lv: {
      name: 'Latvian',
      localName: 'latvie\u0161u valoda'
    },
    mg: {
      name: 'Malagasy',
      localName: 'Malagasy fiteny'
    },
    mh: {
      name: 'Marshallese',
      localName: 'Kajin M\u0327aje\u013C'
    },
    mi: {
      name: 'M\u0101ori',
      localName: 'te reo M\u0101ori'
    },
    mk: {
      name: 'Macedonian',
      localName: '\u043C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438 \u0458\u0430\u0437\u0438\u043A'
    },
    ml: {
      name: 'Malayalam',
      localName: '\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02'
    },
    mn: {
      name: 'Mongolian',
      localName: '\u043C\u043E\u043D\u0433\u043E\u043B'
    },
    mr: {
      name: 'Marathi (Mar\u0101\u1E6Dh\u012B)',
      localName: '\u092E\u0930\u093E\u0920\u0940'
    },
    ms: {
      name: 'Malay',
      localName: 'bahasa Melayu, \u0628\u0647\u0627\u0633 \u0645\u0644\u0627\u064A\u0648\u200E'
    },
    mt: {
      name: 'Maltese',
      localName: 'Malti'
    },
    my: {
      name: 'Burmese',
      localName: '\u1017\u1019\u102C\u1005\u102C'
    },
    na: {
      name: 'Nauru',
      localName: 'Ekakair\u0169 Naoero'
    },
    nb: {
      name: 'Norwegian Bokm\xE5l',
      localName: 'Norsk bokm\xE5l'
    },
    nd: {
      name: 'North Ndebele',
      localName: 'isiNdebele'
    },
    ne: {
      name: 'Nepali',
      localName: '\u0928\u0947\u092A\u093E\u0932\u0940'
    },
    ng: {
      name: 'Ndonga',
      localName: 'Owambo'
    },
    nl: {
      name: 'Dutch',
      localName: 'Nederlands'
    },
    nn: {
      name: 'Norwegian Nynorsk',
      localName: 'Norsk nynorsk'
    },
    no: {
      name: 'Norwegian',
      localName: 'Norsk'
    },
    nr: {
      name: 'South Ndebele',
      localName: 'isiNdebele'
    },
    nv: {
      name: 'Navajo, Navaho',
      localName: 'Din\xE9 bizaad, Din\xE9k\u02BCeh\u01F0\xED'
    },
    ny: {
      name: 'Chichewa; Chewa; Nyanja',
      localName: 'chiChe\u0175a, chinyanja'
    },
    oc: {
      name: 'Occitan',
      localName: 'Occitan'
    },
    oj: {
      name: 'Ojibwe, Ojibwa',
      localName: '\u140A\u14C2\u1511\u14C8\u142F\u14A7\u140E\u14D0'
    },
    om: {
      name: 'Oromo',
      localName: 'Afaan Oromoo'
    },
    or: {
      name: 'Oriya',
      localName: '\u0B13\u0B21\u0B3C\u0B3F\u0B06'
    },
    os: {
      name: 'Ossetian, Ossetic',
      localName: '\u0438\u0440\u043E\u043D \xE6\u0432\u0437\u0430\u0433'
    },
    pa: {
      name: 'Panjabi, Punjabi',
      localName: '\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40, \u067E\u0646\u062C\u0627\u0628\u06CC\u200E'
    },
    pi: {
      name: 'P\u0101li',
      localName: '\u092A\u093E\u0934\u093F'
    },
    pl: {
      name: 'Polish',
      localName: 'polski'
    },
    ps: {
      name: 'Pashto, Pushto',
      localName: '\u067E\u069A\u062A\u0648'
    },
    pt: {
      name: 'Portuguese',
      localName: 'Portugu\xEAs'
    },
    qu: {
      name: 'Quechua',
      localName: 'Runa Simi, Kichwa'
    },
    rc: {
      name: 'Reunion Creole',
      localName: 'kr\xE9ol r\xE9nion\xE9'
    },
    rm: {
      name: 'Romansh',
      localName: 'rumantsch grischun'
    },
    rn: {
      name: 'Kirundi',
      localName: 'kiRundi'
    },
    ro: {
      name: 'Romanian',
      localName: 'rom\xE2n\u0103'
    },
    ru: {
      name: 'Russian',
      localName: '\u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u044F\u0437\u044B\u043A'
    },
    rw: {
      name: 'Kinyarwanda',
      localName: 'Ikinyarwanda'
    },
    sa: {
      name: 'Sanskrit',
      localName: 'Sa\u1E43sk\u1E5Btam'
    },
    sc: {
      name: 'Sardinian',
      localName: 'sardu'
    },
    sd: {
      name: 'Sindhi',
      localName: '\u0938\u093F\u0928\u094D\u0927\u0940, \u0633\u0646\u068C\u064A\u060C \u0633\u0646\u062F\u06BE\u06CC\u200E'
    },
    se: {
      name: 'Northern Sami',
      localName: 'Davvis\xE1megiella'
    },
    sg: {
      name: 'Sango',
      localName: 'y\xE2ng\xE2 t\xEE s\xE4ng\xF6'
    },
    si: {
      name: 'Sinhala, Sinhalese',
      localName: '\u0DC3\u0DD2\u0D82\u0DC4\u0DBD'
    },
    sk: {
      name: 'Slovak',
      localName: 'sloven\u010Dina'
    },
    sl: {
      name: 'Slovene',
      localName: 'sloven\u0161\u010Dina'
    },
    sm: {
      name: 'Samoan',
      localName: 'gagana faa Samoa'
    },
    sn: {
      name: 'Shona',
      localName: 'chiShona'
    },
    so: {
      name: 'Somali',
      localName: 'Soomaaliga, af Soomaali'
    },
    sq: {
      name: 'Albanian',
      localName: 'Shqip'
    },
    sr: {
      name: 'Serbian',
      localName: '\u0441\u0440\u043F\u0441\u043A\u0438 \u0458\u0435\u0437\u0438\u043A'
    },
    ss: {
      name: 'Swati',
      localName: 'SiSwati'
    },
    st: {
      name: 'Southern Sotho',
      localName: 'Sesotho'
    },
    su: {
      name: 'Sundanese',
      localName: 'Basa Sunda'
    },
    sv: {
      name: 'Swedish',
      localName: 'svenska'
    },
    sw: {
      name: 'Swahili',
      localName: 'Kiswahili'
    },
    ta: {
      name: 'Tamil',
      localName: '\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD'
    },
    te: {
      name: 'Telugu',
      localName: '\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41'
    },
    tg: {
      name: 'Tajik',
      localName: '\u0442\u043E\u04B7\u0438\u043A\u04E3, to\u011Fik\u012B, \u062A\u0627\u062C\u06CC\u06A9\u06CC\u200E'
    },
    th: {
      name: 'Thai',
      localName: '\u0E44\u0E17\u0E22'
    },
    ti: {
      name: 'Tigrinya',
      localName: '\u1275\u130D\u122D\u129B'
    },
    tk: {
      name: 'Turkmen',
      localName: 'T\xFCrkmen, \u0422\u04AF\u0440\u043A\u043C\u0435\u043D'
    },
    tl: {
      name: 'Tagalog',
      localName: 'Wikang Tagalog, \u170F\u1712\u1703\u1705\u1714 \u1706\u1704\u170E\u1713\u1704\u1714'
    },
    tn: {
      name: 'Tswana',
      localName: 'Setswana'
    },
    to: {
      name: 'Tonga (Tonga Islands)',
      localName: 'faka Tonga'
    },
    tr: {
      name: 'Turkish',
      localName: 'T\xFCrk\xE7e'
    },
    ts: {
      name: 'Tsonga',
      localName: 'Xitsonga'
    },
    tt: {
      name: 'Tatar',
      localName: '\u0442\u0430\u0442\u0430\u0440\u0447\u0430, tatar\xE7a, \u062A\u0627\u062A\u0627\u0631\u0686\u0627\u200E'
    },
    tw: {
      name: 'Twi',
      localName: 'Twi'
    },
    ty: {
      name: 'Tahitian',
      localName: 'Reo Tahiti'
    },
    ug: {
      name: 'Uighur, Uyghur',
      localName: 'Uy\u01A3urq\u0259, \u0626\u06C7\u064A\u063A\u06C7\u0631\u0686\u06D5\u200E'
    },
    uk: {
      name: 'Ukrainian',
      localName: '\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430'
    },
    ur: {
      name: 'Urdu',
      localName: '\u0627\u0631\u062F\u0648'
    },
    uz: {
      name: 'Uzbek',
      localName: 'zbek, \u040E\u0437\u0431\u0435\u043A, \u0623\u06C7\u0632\u0628\u06D0\u0643\u200E'
    },
    ve: {
      name: 'Venda',
      localName: 'Tshiven\u1E13a'
    },
    vi: {
      name: 'Vietnamese',
      localName: 'Ti\u1EBFng Vi\u1EC7t'
    },
    vo: {
      name: 'Volap\xFCk',
      localName: 'Volap\xFCk'
    },
    wa: {
      name: 'Walloon',
      localName: 'Walon'
    },
    wo: {
      name: 'Wolof',
      localName: 'Wollof'
    },
    xh: {
      name: 'Xhosa',
      localName: 'isiXhosa'
    },
    yi: {
      name: 'Yiddish',
      localName: '\u05D9\u05D9\u05B4\u05D3\u05D9\u05E9'
    },
    yo: {
      name: 'Yoruba',
      localName: 'Yor\xF9b\xE1'
    },
    za: {
      name: 'Zhuang, Chuang',
      localName: 'Sa\u026F cue\u014B\u0185, Saw cuengh'
    },
    zh: {
      name: 'Chinese',
      localName: '\u4E2D\u6587, \u6C49\u8BED, \u6F22\u8A9E'
    },
    zu: {
      name: 'Zulu',
      localName: 'isiZulu'
    }
  };
  
  const $codeElement = $('langISO, langISOL, cntryISO, cntryISOL');

  const convertISO = (codeText, isoType, nameType) => {
    const isoCode = codeText.slice(0, 2);
    const isoConverted = isoType[isoCode];
    return isoConverted ? isoConverted[nameType] : undefined;
  };

  $codeElement.each(function () {
    const codeText = $(this).text();
    let isoType;
    let nameType;
    if ($(this).is('langISO') || $(this).is('langISOL')) {
      isoType = isoLangs;
    } else {
      isoType = isoCountries;
    }

    if ($(this).is('langISO') || $(this).is('cntryISO')) {
      nameType = 'name'
    } else {
      nameType = 'localName';
    }
    const isoConverter = convertISO(codeText, isoType, nameType);
    $(this).text(isoConverter);
  })

})();