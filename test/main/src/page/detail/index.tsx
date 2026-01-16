import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Badge } from '@/app/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Separator } from '@/app/components/ui/separator';
import { ChevronRight, ChevronDown, User } from 'lucide-react';
import keyImage from '@/assets/6e351488c7990fee2f947118f00d039563204fd2.png';
import keyProgrammingImage from '@/assets/13ad257fcb2cc0b2ebbc5806505339b4b923ff40.png';
import keyProfilesImage from '@/assets/a7e5fbdf8508b9b764dc4371c43eb416e4bbd683.png';
import mediaImage from '@/assets/62302e549e88700c9d7f11433f7e5579e1e7d570.png';

const DetailPage = () => {
  const [expandedKeys, setExpandedKeys] = useState<{ [key: string]: boolean }>({});
  const [activeTab, setActiveTab] = useState('overview');

  const toggleKeyExpansion = (keyId: string) => {
    setExpandedKeys((prev) => ({
      ...prev,
      [keyId]: !prev[keyId],
    }));
  };

  return (
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Keys</a>
            <span>/</span>
            <a href="#" className="hover:text-gray-900">Fiat</a>
            <span>/</span>
            <a href="#" className="hover:text-gray-900">124 Spider MR1 (F17)</a>
            <span>/</span>
            <span className="text-gray-900">Keys</span>
          </div>
        </div>

        {/* Product Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-6">
          <div className="flex gap-8">
            {/* Key Image */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
                <img src={keyImage} alt="Key" className="max-w-full max-h-full object-contain" />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                Abarth 124 Spider MR1 (F17) (2016-2020) Smart Key
              </h2>
              <p className="text-gray-600 mb-4">FIAT, ABARTH, ALFA ROMEO</p>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white border border-gray-200 p-1 rounded-lg inline-flex gap-1">
            <TabsTrigger 
              value="overview"
              className="data-[state=active]:bg-black data-[state=active]:text-white rounded-md px-4 py-2"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="programming"
              className="data-[state=active]:bg-black data-[state=active]:text-white rounded-md px-4 py-2"
            >
              Key Programming via OBD
            </TabsTrigger>
            <TabsTrigger 
              value="profiles"
              className="data-[state=active]:bg-black data-[state=active]:text-white rounded-md px-4 py-2"
            >
              Key Profiles
            </TabsTrigger>
            <TabsTrigger 
              value="codeseries"
              className="data-[state=active]:bg-black data-[state=active]:text-white rounded-md px-4 py-2"
            >
              Code Series
            </TabsTrigger>
            <TabsTrigger 
              value="media"
              className="data-[state=active]:bg-black data-[state=active]:text-white rounded-md px-4 py-2"
            >
              Media
            </TabsTrigger>
          </TabsList>

          <div className="space-y-6">
            {/* OVERVIEW TAB */}
            <TabsContent value="overview" className="mt-0 space-y-6">
              <Card className="shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-medium">3B</span>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <span className="text-gray-600">Buttons:</span>
                      <span className="font-medium">3B</span>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <span className="text-gray-600">Frequency:</span>
                      <span className="font-medium">434 MHz</span>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <span className="text-gray-600">FCC Nr:</span>
                      <span className="font-medium">KR55WK50765</span>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <span className="text-gray-600">Transponder:</span>
                      <span className="font-medium">PCF7953</span>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <span className="text-gray-600">Blade:</span>
                      <span className="font-medium">SIP22</span>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <span className="text-gray-600">OEM Replacement for:</span>
                      <span className="font-medium">GQ4-53T, SIP22, Original</span>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <span className="text-gray-600">Battery:</span>
                      <span className="font-medium">CR2032</span>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <span className="text-gray-600">Available in:</span>
                      <span className="font-medium">USA</span>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <span className="text-gray-600">IC/Code Number:</span>
                      <span className="font-medium">1</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle>Reference Times and Prices</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">All Keys Lost</span>
                      </div>
                      <p className="text-sm text-gray-600">Currently not possible due to vehicle security.</p>
                    </div>
                    <Separator />
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Where Keys Exist</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        This service takes around 10-20 minutes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle>Keys</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Universal Keys</h3>
                    
                    <div className="border border-gray-200 rounded-lg mb-3">
                      <button
                        onClick={() => toggleKeyExpansion('key1')}
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                            <img src={keyImage} alt="Key" className="max-w-full max-h-full object-contain" />
                          </div>
                          <div className="text-left">
                            <div className="font-medium">384-1201 Orange 3+1/22 FS</div>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mt-1">IN HAND</Badge>
                          </div>
                        </div>
                        {expandedKeys['key1'] ? (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                      {expandedKeys['key1'] && (
                        <div className="px-4 pb-4 border-t border-gray-200">
                          <p className="text-sm text-gray-600 mt-3">
                            Note:<br />
                            We currently do not have a shell for this key, it is available as a aftermarket shell. Ask for availability!
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="border border-gray-200 rounded-lg mb-3">
                      <button
                        onClick={() => toggleKeyExpansion('key2')}
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                            <img src={keyImage} alt="Key" className="max-w-full max-h-full object-contain" />
                          </div>
                          <div className="text-left">
                            <div className="font-medium">384-1202 Orange 3+1/22 RBS</div>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mt-1">IN HAND</Badge>
                          </div>
                        </div>
                        {expandedKeys['key2'] ? (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                      {expandedKeys['key2'] && (
                        <div className="px-4 pb-4 border-t border-gray-200">
                          <p className="text-sm text-gray-600 mt-3">
                            Note:<br />
                            We currently do not have a shell for this key, it is available as a aftermarket shell. Ask for availability!
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => toggleKeyExpansion('key3')}
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                            <img src={keyImage} alt="Key" className="max-w-full max-h-full object-contain" />
                          </div>
                          <div className="text-left">
                            <div className="font-medium">384-1205 Orange 3+1/21 FIX</div>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mt-1">IN HAND</Badge>
                          </div>
                        </div>
                        {expandedKeys['key3'] ? (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                      {expandedKeys['key3'] && (
                        <div className="px-4 pb-4 border-t border-gray-200">
                          <p className="text-sm text-gray-600 mt-3">
                            Note:<br />
                            We currently do not have a shell for this key, it is available as a aftermarket shell. Ask for availability!
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Original Keys</h3>
                    
                    <div className="border border-gray-200 rounded-lg mb-3">
                      <button
                        onClick={() => toggleKeyExpansion('original1')}
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                            <img src={keyImage} alt="Key" className="max-w-full max-h-full object-contain" />
                          </div>
                          <div className="text-left">
                            <div className="font-medium">384-1024 3B/3B/22 CR2032/434 - KR55WK50765/FCC</div>
                            <p className="text-xs text-gray-500 mt-1">If you have some trouble, please contact us</p>
                          </div>
                        </div>
                        {expandedKeys['original1'] ? (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                      {expandedKeys['original1'] && (
                        <div className="px-4 pb-4 border-t border-gray-200">
                          <p className="text-sm text-gray-600 mt-3">
                            Note:<br />
                            ORIGINAL FIAT SMART KEY
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="border border-gray-200 rounded-lg mb-3">
                      <button
                        onClick={() => toggleKeyExpansion('original2')}
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                            <img src={keyImage} alt="Key" className="max-w-full max-h-full object-contain" />
                          </div>
                          <div className="text-left">
                            <div className="font-medium">384-1025 3B/3B/22 CR2032/434 - KR55WK50765/FCC 007382253</div>
                            <p className="text-xs text-gray-500 mt-1">If you have some trouble, please contact us</p>
                          </div>
                        </div>
                        {expandedKeys['original2'] ? (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                      {expandedKeys['original2'] && (
                        <div className="px-4 pb-4 border-t border-gray-200">
                          <p className="text-sm text-gray-600 mt-3">
                            Note:<br />
                            ORIGINAL FOR 124 SPIDER 2017 OR FROM MEXICO & LATAM WITH DODGE CH & R/T MODELS SINCE 2015 OR SO - PLEASE READ FIRST
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => toggleKeyExpansion('original3')}
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                            <img src={keyImage} alt="Key" className="max-w-full max-h-full object-contain" />
                          </div>
                          <div className="text-left">
                            <div className="font-medium">384-1026 3B/3B/22 CR2032/434</div>
                            <p className="text-xs text-gray-500 mt-1">If you have some trouble, please contact us</p>
                          </div>
                        </div>
                        {expandedKeys['original3'] ? (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                      {expandedKeys['original3'] && (
                        <div className="px-4 pb-4 border-t border-gray-200">
                          <p className="text-sm text-gray-600 mt-3">
                            Note:<br />
                            FIAT MONOVOLUME (124-145)
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* KEY PROGRAMMING TAB */}
            <TabsContent value="programming" className="mt-0 space-y-6">
              <Card className="shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle>Key Programming via OBD</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3">Devices</h3>
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center gap-4">
                          <div className="w-24 h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0">
                            <img src={keyProgrammingImage} alt="Programming Device" className="max-w-full max-h-full object-contain" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-1">AUTEL IM608</h4>
                            <p className="text-sm text-gray-600 mb-2">Advanced Diagnostics and Key Programming Tool</p>
                            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">RECOMMENDED</Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-semibold mb-3">Programming Instructions</h3>
                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium">1</div>
                            <div className="flex-1">
                              <p className="text-sm">Connect the device to the OBD port</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium">2</div>
                            <div className="flex-1">
                              <p className="text-sm">Turn ignition to ON position (do not start engine)</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium">3</div>
                            <div className="flex-1">
                              <p className="text-sm">Select vehicle make, model and year on the device</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium">4</div>
                            <div className="flex-1">
                              <p className="text-sm">Follow on-screen instructions to program the new key</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium">5</div>
                            <div className="flex-1">
                              <p className="text-sm">Test the new key to ensure proper operation</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-semibold mb-3">Notes</h3>
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <p className="text-sm text-amber-900">
                          • Programming requires at least one working key<br />
                          • Keep all existing keys nearby during programming<br />
                          • Programming time: approximately 10-20 minutes<br />
                          • Make sure the battery in the new key is fresh
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* KEY PROFILES TAB */}
            <TabsContent value="profiles" className="mt-0 space-y-6">
              <Card className="shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle>Key Profiles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                          <img src={keyProfilesImage} alt="YAZED" className="max-w-full max-h-full object-contain" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">YAZED</h3>
                          <p className="text-sm text-gray-600">Profile</p>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                        <h4 className="font-medium mb-3">Available Profiles:</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 py-2 px-3 bg-white rounded border border-gray-200">
                            <span className="text-sm">04 01, 05-29, 14, 51, 60, 81, 82-83 Fiat 500 & 500L</span>
                          </div>
                          <div className="flex items-center gap-3 py-2 px-3 bg-white rounded border border-gray-200">
                            <span className="text-sm">04 01, 40-51, 71-81 Fiat Punto</span>
                          </div>
                          <div className="flex items-center gap-3 py-2 px-3 bg-white rounded border border-gray-200">
                            <span className="text-sm">04 01, 04-51, 71-81 Fiat GRANDE PUNTO/New Panda</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-semibold mb-4">Autel</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 py-2 px-3 bg-gray-50 rounded border border-gray-200">
                          <span className="text-sm font-medium">Profile ID:</span>
                          <span className="text-sm text-gray-600">04 01</span>
                        </div>
                        <div className="flex items-center gap-3 py-2 px-3 bg-gray-50 rounded border border-gray-200">
                          <span className="text-sm font-medium">Compatible Models:</span>
                          <span className="text-sm text-gray-600">Fiat 500, 500L, 500X</span>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-semibold mb-3">Decoding Tips</h3>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm text-blue-900">
                          When decoding this key profile, make sure to:<br />
                          <br />
                          1. Verify the transponder type matches the vehicle requirements<br />
                          2. Check that the frequency (434 MHz) is compatible<br />
                          3. Ensure you're using compatible cutting equipment for SIP22 blade
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* CODE SERIES TAB */}
            <TabsContent value="codeseries" className="mt-0 space-y-6">
              <Card className="shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-medium">3B</span>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <span className="text-gray-600">Buttons:</span>
                      <span className="font-medium">3B</span>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <span className="text-gray-600">Frequency:</span>
                      <span className="font-medium">434 MHz</span>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <span className="text-gray-600">FCC Nr:</span>
                      <span className="font-medium">KR55WK50765</span>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <span className="text-gray-600">Transponder:</span>
                      <span className="font-medium">PCF7953</span>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <span className="text-gray-600">Blade:</span>
                      <span className="font-medium">SIP22</span>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <span className="text-gray-600">Available in:</span>
                      <span className="font-medium">USA</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle>Key Profiles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                          <img src={keyProfilesImage} alt="YAZED" className="max-w-full max-h-full object-contain" />
                        </div>
                        <h3 className="font-semibold">YAZED</h3>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h4 className="text-sm font-medium mb-3">Profiles:</h4>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2 text-sm">
                            <span className="text-gray-600">•</span>
                            <span>04 01, 05-29, 14, 51, 60, 81, 82-83 Fiat 500 & 500L</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm">
                            <span className="text-gray-600">•</span>
                            <span>04 01, 40-51, 71-81 Fiat Punto</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm">
                            <span className="text-gray-600">•</span>
                            <span>04 01, 04-51, 71-81 Fiat GRANDE PUNTO/New Panda</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-semibold mb-3">Autel</h3>
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div className="space-y-2 text-sm">
                          <div>Profile: 04 01</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle>Decoding Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-900">
                      When decoding keys using this profile:<br />
                      <br />
                      1. Verify transponder compatibility with vehicle<br />
                      2. Check frequency matches (434 MHz)<br />
                      3. Ensure proper blade type (SIP22) for cutting
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* MEDIA TAB */}
            <TabsContent value="media" className="mt-0 space-y-6">
              <Card className="shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-medium">3B</span>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <span className="text-gray-600">Frequency:</span>
                      <span className="font-medium">434 MHz</span>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <span className="text-gray-600">Transponder:</span>
                      <span className="font-medium">PCF7953</span>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <span className="text-gray-600">Blade:</span>
                      <span className="font-medium">SIP22</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle>Instructions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      • Key must be properly programmed via OBD<br />
                      • Ensure battery is installed and functional<br />
                      • Test all buttons before delivering to customer
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle>Related images and videos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-video bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                      <img src={keyImage} alt="Key" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="aspect-video bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                      <img src={keyProgrammingImage} alt="Programming" className="max-w-full max-h-full object-contain" />
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <h4 className="text-sm font-medium">Additional Resources:</h4>
                    <div className="space-y-2">
                      <a href="#" className="text-sm text-blue-600 hover:underline block">Programming Video Tutorial</a>
                      <a href="#" className="text-sm text-blue-600 hover:underline block">Key Disassembly Guide</a>
                      <a href="#" className="text-sm text-blue-600 hover:underline block">Battery Replacement</a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle>Synchronizing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-medium mb-3">Synchronization Procedure:</h4>
                    <div className="space-y-2 text-sm">
                      <p>1. Insert key into ignition</p>
                      <p>2. Turn to ON position (do not start)</p>
                      <p>3. Press lock button on key 3 times</p>
                      <p>4. Turn ignition to OFF</p>
                      <p>5. Remove key and test remote functions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle>Key Circuitboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div className="w-32 h-32 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0">
                      <img src={mediaImage} alt="Circuit Board" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-2">Circuit Board Details</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>• Transponder: PCF7953</p>
                        <p>• Frequency: 434 MHz</p>
                        <p>• Battery: CR2032</p>
                        <p>• FCC ID: KR55WK50765</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </main>
  );
}

export default DetailPage;