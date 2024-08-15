#version 450
/* Copyright (c) 2023, Google
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 the "License";
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *	 http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

layout(location = 0) in vec2 inUV;

////////////////////////////////////////

layout(set = 0, binding = 0) uniform SceneConstants
{
    mat4 projection;
    mat4 view;
    float background_grayscale;
    uint sortFragments;
    uint fragmentMaxCount;
    uint sortedFragmentCount;
} sceneConstants;

////////////////////////////////////////

layout(set = 0, binding = 5) uniform sampler2D backgroundTex;

////////////////////////////////////////

layout(location = 0) out vec4 outColor;
layout(location = 1) out uint outFragIndex;

void main()
{
    outColor = texture(backgroundTex, inUV) * sceneConstants.background_grayscale;
}
